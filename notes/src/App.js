import React, {useState} from 'react'
import NewNote from './Components/NewNote'
import NotesList from './Components/NotesList'
import EditNote from './Components/EditNote'
import './App.css';

function App() {
  const [notes, setNotes] = useState([])
  const [note, setNote] = useState({
    id: 0,
    name: '',
    content: ''
  })

  const createNewNote = () => {
    console.log("clicked");
    //make new note object
    //object will contain key/values for each note created
    //need a unique id, a name and a value(user's notes) 
    setNotes({id: {id +1},
    name: "Brian"})
  }

  return (
    <div className="container">
      <NewNote notes={notes} createNewNote={createNewNote}/>
      <NotesList/>
      <EditNote/>
    </div>
  );
}

export default App;
