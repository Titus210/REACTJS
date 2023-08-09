import React from 'react';
import './App.css';
import { Greet } from './Components/Greet';
import { Person } from './Components/person';

function App() {
  const personName = {
    first: "Titus",
    last: 'Kiplagat',
  }
  return (
    <div className="App">
      <Greet name={personName.first} messageCount={22} isLoggedIn={true} />
      <Person name = {personName} />
    </div>
  );
}

export default App;