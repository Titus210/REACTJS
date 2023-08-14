import React from 'react';
import './App.css';
import { Greet } from './Components/Greet';
import { Person } from './Components/Person';
import { PersonList } from './Components/PersonList';
import { Status } from './Components/Status';
import { Heading } from './Components/Heading';
import { Oscar } from './Components/Oscar';

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
      <Status status='loading' />
      <Heading>This is a placeholder text </Heading>

      <Oscar>
        <Heading>Oscar goes to leornado Dipratio</Heading>
      </Oscar>
    </div>
  );
}

export default App;