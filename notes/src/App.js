import React, { useState } from "react";
import NewNote from "./Components/NewNote";
import NotesList from "./Components/NotesList";
import EditNote from "./Components/EditNote";
import "./App.css";
import dummyData from "./Components/dummyData";

function App() {
  const [notes, setNotes] = useState([]);
  const [editTitle, setEditTitle] = useState("Title");
  const [editContent, setEditContent] = useState("Content");
  const [selectedNote, setSelectedNote] = useState({});

  //Button that creates a new note
  const createNewNote = () => {
    setNotes([
      ...notes,
      { title: "Butts", content: "Notes", id: Math.random() },
    ]);
   
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
        selectedNote={selectedNote}
        setEditTitle={setEditTitle}
        setEditContent={setEditContent}
        notes={notes}
        editTitle={editTitle}
        editContent={editContent}
        editNotes={editNotes}
      />
    </div>
  );
}

export default App;
