import React from 'react';

const search = ({ filterList }) => {
  return (
    <input type='text' placeholder='Search for an issue' onChange={(value) => filterList(value.target.value)}></input>
  );
};

export default search;