import axios from "axios";
import React, { useEffect, useState } from "react";

const EditNote = ({ selectedNote, notes }) => {
  const [editNote, setEditNote] = useState({ title: '', content: '' });

  //Sets the editNote state immediately to the currently selected note
  useEffect(() => {
    setEditNote({ title: selectedNote.title, content: selectedNote.content })
    //Unsure about dependency array below. Had selectedNote.id but React threw a warning saying to include the below dependencies.
  },[notes.id]);

  console.log("SELECTED", selectedNote);
  console.log("EDIT NOTE", editNote);
  //Spreading the editNote in populates EditNote inputs with the current selectedNote title value
  const handleNameChange = (e) => {
    setEditNote({...editNote, title: e.target.value});
    console.log("name", e.target.value);
    
  };
  //Spreading the editNote in populates EditNote inputs with the current selectedNote content value
  const handleContentChange = (e) => {
    setEditNote({...editNote, content: e.target.value});
    console.log("content", e.target.value);
    
  };

  const handleSubmit = (e) => {
    const { id } = selectedNote;
    console.log("hSubmit ID", id);
    axios.put(`/api/notes/${id}`, editNote)
    //Put requests don't return res??  Tried logging it but wouldn't work
  };

  if (notes.length > 0) {
    return (
      <div className="editNote">
        <form onSubmit={handleSubmit}>
          <input
            id="name"
            type="text"
            placeholder="Title"
            name="name"
            onChange={handleNameChange}
            value={editNote.title}
          />
          <br></br>
          <button type="submit" value="Submit">
            Save Title
          </button>
          <br></br>
          {/* <button onClick={setEditTitle}>Save Name</button> */}
          <br></br>

          <input
            id="content"
            type="text"
            placeholder="Notes"
            name="notes"
            onChange={handleContentChange}
            value={editNote.content}
          />
        </form>
        <button /*onClick={submitContentHandler}*/>Save Notes</button>
      </div>
    );
  } else {
    return null;
  }
};

export default EditNote;
