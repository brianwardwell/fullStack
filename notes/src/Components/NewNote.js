import React from "react";
import Note from './Note'

const NewNote = ({notes, createNewNote, deleteAll}) => {

  const handleClick = () => {
    createNewNote();
    console.log(notes)
};
  const handleDelete = () => {
    deleteAll();
  }

return (
  <div className="newNote">
    <button onClick={handleClick}>New Note</button>
    <button onClick={handleDelete}>Delete All</button>
  </div>
);
};

export default NewNote;

