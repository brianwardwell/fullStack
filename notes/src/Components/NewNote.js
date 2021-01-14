import React from "react";


const NewNote = ({ deleteSelected, createNewNote, selectedNote }) => {
  //Button that creates a new note

  const handleDelete = (selectedNote) => {
    console.log("Selected for Deletion", selectedNote)
    deleteSelected(selectedNote);
  };

  return (
    <div className="newNote">
      <button onClick={createNewNote}>New Note</button>
      <button onClick={handleDelete}>Delete All</button>
    </div>
  );
};

export default NewNote;
