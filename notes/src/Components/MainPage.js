import React, { useState, useEffect } from "react";
import NewNote from "../Components/NewNote";
import NotesList from "../Components/NotesList";
import EditNote from "../Components/EditNote";
import BlankNote from "../Components/BlankNote";
import axiosWithAuth from "../axiosWithAuth";
import "../App.css";

const MainPage = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(undefined);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/users/notes")
      .then((res) => {
        setNotes(res.data);
      })
      .catch(() => console.log("Couldn't finish UseEffect"));
  }, []);
  //Note will receive the note from NotesList after it maps
  //selectNote() will take that note in and set it to state
  const selectNote = (note) => {
    //Needed to set selectedId state
    setSelectedNote(note);
  };

  const deleteSelected = (selNote) => {
    selNote
      ? axiosWithAuth()
          .delete(`api/users/notes/${selNote.id}`)
          .then((count) => {
            count
              ? console.log(`Successfully deleted ${count} note`)
              : console.log("Couldn't delete that note");
          })
          .catch((err) => console.log("Couldn't delete from server", err))
      : console.log("No note selected");
    // const newNotes = notes.filter(n => n.id !== note.id);
    // setNotes(newNotes);
    const newNotes = notes.filter((note) => note.id !== selNote.id);
    setNotes(newNotes);
    setSelectedNote(newNotes.length ? newNotes[0] : undefined);
  };

  const newNote = {
    title: "Untitled",
    content: "...",
  };

  const createNewNote = () => {
    axiosWithAuth()
      .post("/api/users/notes", newNote)
      .then((res) => {
        res.status === 200
          ? console.log("Successfully added new note", res)
          : console.log("Couldn't create new note");
        setNotes([...notes, { ...res.data }]);
      })
      .catch((err) => console.log("POST failed", err));
  };

  const updateNote = (selNote, editedNote) => {
    let updatedNotes = [...notes];
    const noteIndex = notes.findIndex((elem) => elem.id === selNote.id);
    updatedNotes[noteIndex] = {
      ...updatedNotes[noteIndex],
      title: editedNote.title,
      content: editedNote.content,
    };
    setNotes(updatedNotes);
  };

  return (
    <div className="container">
      <NewNote
        createNewNote={createNewNote}
        deleteSelected={deleteSelected}
        selectedNote={selectedNote}
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
        <EditNote
          selectedNote={selectedNote}
          notes={notes}
          updateNote={updateNote}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default MainPage;
