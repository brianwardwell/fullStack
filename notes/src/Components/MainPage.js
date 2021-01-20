import React, { useState } from "react";
import NewNote from "../Components/NewNote";
import NotesList from "../Components/NotesList";
import EditNote from "../Components/EditNote";
import BlankNote from "../Components/BlankNote";
import axiosWithAuth from "../axiosWithAuth";
import "../App.css";

const MainPage = () => {
  let dummyData = [
    { id: 1, title: "Brian", content: "b note" },
    { id: 2, title: "Taryn", content: "t note" },
    { id: 3, title: "Finley", content: "f note" },
  ];

  const [notes, setNotes] = useState(dummyData);
  const [selectedNote, setSelectedNote] = useState(undefined);

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get("/api/users/notes")
  //     .then((res) => {
  //       setNotes(res.data);
  //     })
  //     .catch(() => console.log("Couldn't finish UseEffect"));
  // }, []);

  console.log("New Notes!!!", notes);

  // notes = [{id:2, title:stuff}]
  // notes = {id_2: {title:stuff}}
  // var myNote = notesid_2
  //Note will receive the note from NotesList after it maps
  //selectNote() will take that note in and set it to state
  const selectNote = (note) => {
    //Gets passed to Note.js
    //Needed to set selectedId state
    setSelectedNote(note);
  };

  const deleteSelected = (selNote, notes) => {
    // note
    //   ? axiosWithAuth()
    //       .delete(`api/users/notes/${note.id}`)
    //       .then((count) => {
    //         count
    //           ? console.log(`Successfully deleted ${count} note`)
    //           : console.log("Couldn't delete that note");
    //       })
    //       .catch((err) => console.log("BUTTS", err))
    //   : console.log("No note selected");
    // const newNotes = notes.filter(n => n.id !== note.id);
    // setNotes(newNotes);
    const newNotes = notes.filter((note) => note.id !== selNote.id);
    console.log("WHAT IS NEW NOTES", newNotes)
    setNotes(newNotes);
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
  // Using notes.length as a placeholder fro id until i complete front end
  const newNote = {
    id: notes.length + 1,
    title: "Untitled",
    content: "...",
  };

  const createNewNote = () => {
    // console.log("GETTING TO NEW NOTE POST?");
    // axiosWithAuth()
    //   .post("/api/users/notes", newNote)
    //   .then((res) => {
    //     res.status(200).json({ message: "Note posted" });
    //   })
    //   .catch((err) => console.log("POST failed", err));
    //Using a counter to give the useEffect something to watch for so it automatically rerenders
    // console.log("THIS IS NOTEs", notes);
    setNotes([...notes, newNote]);
  };

  return (
    <div className="container">
      <NewNote createNewNote={createNewNote} 
      deleteSelected={deleteSelected} 
      selectedNote={selectedNote}
      notes={notes}/>

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
    </div>
  );
};

export default MainPage;
