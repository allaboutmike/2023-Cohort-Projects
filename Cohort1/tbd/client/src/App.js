
import React from 'react';
import Search from './components/Search';
import sampleData from './data/sampleData';


function App() {
  return (
    <div className="tc bg-green ma0 pa4 min-vh-100">
      <Search details={sampleData}/>
    </div>
  );
}

export default App;