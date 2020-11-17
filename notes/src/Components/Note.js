import React from "react";

//Note is an object with content, id and title
const Note = ({ note, selectNote, selectedNote}) => {
  //Make sure notes aren't empty
  const handleClick = () => {
    console.log('what note looks like', note)
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
          <p>{note.content}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Note;
