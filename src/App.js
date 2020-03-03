import React from 'react';
import Search from './components/search'
import IssueList from './components/IssueList'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      list: [],
      filteredList: []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/facebook/react/issues')
    .then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({list: data})
      this.setState({filteredList: data})
  })
  }

  filterList(filterString) {
    const filteredList = this.state.list.filter((element) => element.title.includes(filterString))
    this.setState({filteredList: filteredList})
  }

  render () {
    return (
      <div className="App">
        <Search filterList={this.filterList.bind(this)}/>
        <IssueList list={this.state.filteredList}/>
      </div>
    );
  }
}

export default App;
