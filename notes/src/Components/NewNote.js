import React from "react";

const NewNote = ({ notes, deleteAll, count, setCount, createNewNote }) => {
  //Button that creates a new note

  const handleDelete = () => {
    deleteAll();
  };

  return (
    <div className="newNote">
      <button onClick={createNewNote}>New Note</button>
      <button onClick={handleDelete}>Delete All</button>
    </div>
  );
};

export default NewNote;
