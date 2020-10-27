import React from "react";
import Note from './Note'

const NewNote = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="newNote">
      <button onClick={handleClick}>New Note</button>
    </div>
  );
};

export default NewNote;
