import React from "react";
import Note from './Note'

const NewNote = ({notes, createNewNote}) => {

  const handleClick = () => {
    createNewNote();
    console.log(notes)
};

return (
  <div className="newNote">
    <button onClick={handleClick}>New Note</button>
  </div>
);
};

export default NewNote;

