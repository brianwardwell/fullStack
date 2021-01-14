import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute';
import Login from "./Components/Login";
import Home from "./Components/Home";
import NewNote from "./Components/NewNote";
import NotesList from "./Components/NotesList";
import EditNote from "./Components/EditNote";
import BlankNote from "./Components/BlankNote";
import Register from "./Components/Register";
import axiosWithAuth from './axiosWithAuth'
import "./App.css";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(undefined);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("TOKEN", localStorage.token)
    axiosWithAuth()
      .get("/api/users/notes")
      .then((res) => {
        console.log("GET RESPONSE", res);
        setNotes(res.data);
      })
      .catch(() => console.log("Couldn't finish UseEffect"));
  }, [count]);

  //Note will receive the note from NotesList after it maps
  //selectNote() will take that note in and set it to state
  const selectNote = (note) => {
    //Gets passed to Note.js
    //Needed to set selectedId state
    setSelectedNote(note);
  };

  const deleteSelected = (note) => {
    
    axiosWithAuth()
    .delete(`api/users/notes/${note.id}`)
    .then(count => {
      count ? console.log(`Successfully deleted ${count} note`)
      : console.log("Couldn't delete that note")
    })
    .catch(err => console.log(err))
  };

  /***** Keeping deleteAll for dev purposes, remove when deploying *****/
  // const deleteAll = () => {
  //   axiosWithAuth()
  //     .delete("/api/users/notes")
  //     .then((res) => {
  //       console.log("Deleted All", res);
  //     })
  //     .catch((err) => console.log({message: `Couldnt delete because ${err}`}));
  //   //Using a counter to give the useEffect something to watch for so it automatically rerenders
  //   setCount(count + 1);
  // };

  //Creating a new note object that posts immediately to the db after the newNote button is clicked
  const newNote = {
    title: "Untitled",
    content: "...",
  };

  const createNewNote = () => {
    console.log("GETTING TO NEW NOTE POST?");
    axiosWithAuth()
    .post("/api/users/notes", newNote).then((res) => {
      res.status(200).json({message: "Note posted"})
    })
    .catch(err => console.log("POST failed", err))
    //Using a counter to give the useEffect something to watch for so it automatically rerenders
    
    setCount(count + 1);
  }; 

  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/users/register" component={Register} />

        <Route path="/users/login" component={Login} />

        <PrivateRoute path="/users/notes">
          <NewNote
            notes={notes}
            count={count}
            setCount={setCount}
            createNewNote={createNewNote}
            deleteSelected={deleteSelected}
          />

          {notes.length > 0 ? (
            <NotesList
              notes={notes}
              selectedNote={selectedNote}
              selectNote={selectNote}
            />
          ) : (
            <BlankNote />
          )}

          {selectedNote ? (
            <EditNote selectedNote={selectedNote} notes={notes} />
          ) : (
            <></>
          )}
        </PrivateRoute>
        <Route path="*" component={() => "404 Page Not Found"} />
      </Switch>
    </div>
  );
}

export default App;
