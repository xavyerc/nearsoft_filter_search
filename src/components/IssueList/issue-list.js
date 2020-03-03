import React from 'react';
import Issue from '../Issue'

const IssueList = ({ list }) => {
  return (
    <div>
      {list.map((issue) => <Issue 
        title={issue.title}
        key={issue.title}
      />)}
    </div>
  );
};

export default IssueList;