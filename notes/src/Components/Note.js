import React from "react";

//Note is an object with content, id and title
const Note = ({ note, selectNote, selectedNote}) => {
 
  //This will set the clicked note into selectedNote state
  const handleClick = () => {
    console.log('what note looks like', note)
    selectNote(note);
  };
  //If selectedNote.id matches one of the note.id's, it will apply selectedNote className
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
