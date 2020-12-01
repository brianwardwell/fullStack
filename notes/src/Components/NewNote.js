import Axios from "axios";
import React, {useState} from "react";
import axios from 'axios'


const NewNote = ({ notes, deleteAll, count, setCount, createNewNote }) => {
  //Button that creates a new note
 
  
  
  const handleDelete = () => {
    deleteAll();
  };
  console.log('Second', notes)
  return (
    <div className="newNote">
      <button onClick={createNewNote}>New Note</button>
      <button onClick={handleDelete}>Delete All</button>
    </div>
  );
};

export default NewNote;
