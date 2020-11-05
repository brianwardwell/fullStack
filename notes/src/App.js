import React, {useState} from 'react'
import NewNote from './Components/NewNote'
import NotesList from './Components/NotesList'
import EditNote from './Components/EditNote'
import './App.css';

function App() {
  const [notes, setNotes] = useState([])
  const [editTitle, setEditTitle] = useState('Title');
  const [editContent, setEditContent] = useState('Content');
  
  const createNewNote = () => {
    console.log("clicked");
    setNotes([{title: "untitled", content: "Notes"}, ...notes]);
  }

  const deleteAll = () => {
    setNotes([])
  }

  return (
    <div className="container">
      <NewNote notes={notes} createNewNote={createNewNote} deleteAll={deleteAll}/>
      <NotesList notes={notes}/>
      <EditNote editTitle={editTitle} editContent={editContent}/>
    </div>
  );
}

export default App;

