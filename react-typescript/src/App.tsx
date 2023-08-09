import React from 'react';
import './App.css';
import { Greet } from './Components/Greet';

function App() {

  const name = 'titus'
  return (
    <div className="App">
      <Greet name={name} messageCount={4} />

    </div>
  );
}

export default App;