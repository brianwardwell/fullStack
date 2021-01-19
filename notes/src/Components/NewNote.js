import React from "react";


const NewNote = ({ deleteSelected, createNewNote, selectedNote}) => {
  //Button that creates a new note
  console.log("WHAT IS SELECTED NOTE", selectedNote)
  const handleDelete = () => {
    deleteSelected(selectedNote);
  };

  return (
    <div className="newNote">
      <button onClick={createNewNote}>New Note</button>
      <button onClick={handleDelete}>Delete Note</button>
    </div>
  );
};

export default NewNote;
