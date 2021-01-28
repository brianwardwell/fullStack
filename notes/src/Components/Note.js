import React from "react";

//Note is an object with content, id and title
const Note = ({ note, selectNote, selectedNote}) => {
 
  //This will set the clicked note into selectedNote state
  const handleClick = () => {
    selectNote(note);
  };
  //If selectedNote.id matches one of the note.id's, it will apply selectedNote className
  if (note) {
    return (
      <div>
        <div id="note"
          onClick={handleClick}
          className={selectedNote && note.id === selectedNote.id ? "note selectedNote" : "note"}
        >
          <h4>{note.title.length < 25 ? note.title : note.title.substring(0,15) + "..."}</h4>
          <p>{note.content.length < 25 ? note.content : note.content.substring(0,18) + "..."}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Note;
