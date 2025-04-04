import React from 'react';
import './App.css';
import ChecklistComponent from './components/ChecklistComponent/ChecklistComponent';

function App() {
  return (
    <div className="App">
      <ChecklistComponent onDone={() => alert('Done clicked!')} />
    </div>
  );
}

export default App;
