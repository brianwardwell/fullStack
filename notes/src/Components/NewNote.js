import React from "react";
import {Link} from 'react-router-dom';


const NewNote = ({ deleteSelected, createNewNote, selectedNote, notes}) => {
  //Button that creates a new note
  
  const handleDelete = () => {
    
    deleteSelected(selectedNote, notes);
  };

  return (
    <div className="newNote">
      <button onClick={createNewNote}>New Note</button>
      <br></br>
      <button onClick={handleDelete}>Delete Note</button>
      <Link to='/users/login'><button>Logout</button> </Link>
    </div>
  );
};

export default NewNote;
