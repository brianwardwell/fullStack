import React from "react";
import Note from "./Note";

// NotesList will map through all of the Notes for the given user and then render each Note component
// NotesList.js is the only access I have to note
const NotesList = ({ notes, selectNote, selectedNote }) => {
  return (
    //if notes exist, map over them and send them to Note comp
    <div className="notesList">
      {notes.length > 0
        ? notes.map((note) => {
            return (
              <Note
                selectNote={selectNote}
                selectedNote={selectedNote}
                key={note.id}
                note={note}
              />
            );
          })
        : null}
    </div>
  );
};

export default NotesList;
