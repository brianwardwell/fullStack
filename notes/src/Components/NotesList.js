import React from "react";
import Note from "./Note";

// NotesList will map through all of the Notes for the given user and then render each Note component
const NotesList = ({ notes, editTitle, editContent }) => {
  return (
    <div className="notesList">
      {notes.map((note) => {
        return (
          <Note notes={notes} editTitle={editTitle} editContent={editContent} />
        );
      })}
    </div>
  );
};

export default NotesList;
