import React from "react";
import Note from './Note'

const NewNote = ({notes, createNewNote, deleteAll}) => {

  const handleClick = () => {
    createNewNote();
    
};
  const handleDelete = () => {
    deleteAll();
  }
  console.log(notes)
return (
  <div className="newNote">
    <button onClick={handleClick}>New Note</button>
    <button onClick={handleDelete}>Delete All</button>
  </div>
);
};

export default NewNote;

