import React, { useEffect, useState } from "react";
import NewNote from "./Components/NewNote";
import NotesList from "./Components/NotesList";
import EditNote from "./Components/EditNote";
import "./App.css";
import axios from 'axios';


function App() {
  const [notes, setNotes] = useState([]);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [selectedNote, setSelectedNote] = useState({});

  useEffect(() => {
    axios.get('/api/notes')
    .then(res => res.json())
    .then(noteList => setNotes(noteList) )
  }, []);
  console.log('Second', notes)

  //Button that creates a new note
  const createNewNote = () => {
    setNotes([{ title: "", content: "", id: null }, ...notes]);
  };

  const selectNote = (note) => {
    //Gets passed to Note.js
    //Needed to set selectedId state
    setSelectedNote(note);
  };

  const editNotes = () => {
    setNotes([{ title: editTitle, content: editContent }]);
  };

  const deleteAll = () => {
    setNotes([]);
  };

  return (
    <div className="container">
      <NewNote
        notes={notes}
        createNewNote={createNewNote}
        deleteAll={deleteAll}
      />
      <NotesList
        notes={notes}
        selectedNote={selectedNote}
        selectNote={selectNote}
      />

      <EditNote
        
        editTitle={editTitle}
        setEditTitle={setEditTitle}
        setEditContent={setEditContent}
        notes={notes}
        editContent={editContent}
        editNotes={editNotes}
      />
    </div>
  );
}

export default App;
