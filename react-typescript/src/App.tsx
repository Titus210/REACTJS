import React from 'react';
import './App.css';
import { Greet } from './Components/Greet';
import { Person } from './Components/person';
import { PersonList } from './Components/personList';

function App() {
  const personName = {
    first: "Titus",
    last: 'Kiplagat',
  }


  const nameList = [
    {
      first: "Titus",
      last: "Kiplagat",
    },
    {
      first: "Emily",
      last: "Johnson",
    },
    {
      first: "Alex",
      last: "Smith",
    },
    {
      first: "Maria",
      last: "Garcia",
    },
  ];

  return (
    <div className="App">
      <Greet name={personName.first} messageCount={22} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;