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
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get('/api/notes')
    .then(res => {
      console.log('this is the response', res);
      setNotes(res.data)
    })
    .catch(() => console.log("Couldn't get data"))
  }, [count])


 

  const selectNote = (note) => {
    //Gets passed to Note.js
    //Needed to set selectedId state
    setSelectedNote(note);
  };

  const editNotes = () => {
    setNotes([{ title: editTitle, content: editContent }]);
  };

  const deleteAll = () => {
    axios.delete('/api/notes')
    .then(res => {
      console.log('Deleted All', res)
    })
    .catch(() => console.log("Couldn't delete"))
    setCount(count + 1)
  };

  const newNote = {
    title: 'Untitled',
    content: ''
  }

  const createNewNote = () => {
    axios.post('/api/notes', newNote)
    .then(res => {
      console.log("added", res.data)
      console.log(notes)
    })
    setCount(count + 1)
  };
  console.log('COUNT', count)

  return (
    <div className="container">
      <NewNote
        notes={notes}
        count={count}
        setCount={setCount}
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
