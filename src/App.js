import React from 'react';
import './App.css';
import Search from './components/search';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchchange={handleOnSearchChange} />

    </div>
  );
}

export default App;
