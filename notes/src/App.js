import React, { useEffect, useState } from "react";
import {BrowseRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Login from './Components/Login'
import NewNote from "./Components/NewNote";
import NotesList from "./Components/NotesList";
import EditNote from "./Components/EditNote";
import BlankNote from './Components/BlankNote'
import "./App.css";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(undefined);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("/api/notes")
      .then((res) => {
        console.log("this is the response", res);
        setNotes(res.data);
      })
      .catch(() => console.log("Couldn't get data"));
  }, [count]);

  //Note will receive the note from NotesList after it maps
  //selectNote() will take that note in and set it to state
  const selectNote = (note) => {
    //Gets passed to Note.js
    //Needed to set selectedId state
    setSelectedNote(note);
  };

  const deleteAll = () => {
    axios
      .delete("/api/notes")
      .then((res) => {
        console.log("Deleted All", res);
      })
      .catch(() => console.log("Couldn't delete"));
    //Using a counter to give the useEffect something to watch for so it automatically rerenders
    setCount(count + 1);
  };

  //Creating a new note object that posts immediately to the db after the newNote button is clicked
  const newNote = {
    title: "Untitled",
    content: "...",
  };

  const createNewNote = () => {
    console.log('Getting here?')
    axios.post("/api/notes", newNote).then((res) => {
    });
    //Using a counter to give the useEffect something to watch for so it automatically rerenders
    setCount(count + 1);
  };

  return (
    <div className="container">
      <Router>
      <NewNote
        notes={notes}
        count={count}
        setCount={setCount}
        createNewNote={createNewNote}
        deleteAll={deleteAll}
      />

      
      {notes.length > 0 ? 
      <NotesList
        notes={notes}
        selectedNote={selectedNote}
        selectNote={selectNote}
      /> : <BlankNote/>}
      
      {selectedNote ?
        <EditNote
        selectedNote={selectedNote}
        notes={notes}
      /> : <></>}
      </Router>
    </div>
  );
}

export default App;
      
