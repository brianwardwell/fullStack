import React from 'react'
import NewNote from './Components/NewNote'
import NotesList from './Components/NotesList'
import EditNote from './Components/EditNote'
import './App.css';

function App() {
  return (
    <div className="container">
      <NewNote/>
      <NotesList/>
      <EditNote/>
    </div>
  );
}

export default App;
