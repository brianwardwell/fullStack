import React, { useState } from "react";
import NewNote from "./Components/NewNote";
import NotesList from "./Components/NotesList";
import EditNote from "./Components/EditNote";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  const [editTitle, setEditTitle] = useState("Title");
  const [editContent, setEditContent] = useState("Content");

  const createNewNote = () => {
    
    setNotes([{ title: 'Title', content: 'Notes'}, ...notes]);
    console.log('what is ', editTitle)
    console.log('is notes setting')
  };

  const editNotes = () => {
    setNotes([{title: editTitle, content: editContent}])
  }

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
      <NotesList editTitle={editTitle}
      editContent={editContent}
      notes={notes} 
      />
      <EditNote
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
