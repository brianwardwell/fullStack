import React from "react";


const NewNote = ({ deleteSelected, createNewNote, selectedNote, notes}) => {
  //Button that creates a new note
  console.log("SELECTED NOTE", selectedNote)
  const handleDelete = () => {
    
    deleteSelected(selectedNote, notes);
  };

  return (
    <div className="newNote">
      <button onClick={createNewNote}>New Note</button>
      <br></br>
      <button onClick={handleDelete}>Delete Note</button>
    </div>
  );
};

export default NewNote;
