import React from "react";

const Note = ({ note, selectNote, selectedNote}) => {
  //Make sure notes aren't empty
  const handleClick = () => {
    selectNote(note);
  };
  if (note) {
    return (
      <div>
        <div
          onClick={handleClick}
          className={note.id === selectedNote.id ? "note selectedNote" : "note"}
        >
          <h3>{note.title}</h3>
          <h4>{note.content}</h4>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Note;
