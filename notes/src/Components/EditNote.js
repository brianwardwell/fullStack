import React, { useEffect, useState } from "react";
import axiosWithAuth from "../axiosWithAuth";

const EditNote = ({ selectedNote, notes, updateNote}) => {
  const [editNote, setEditNote] = useState({ title: "", content: "" });

  //Sets the editNote state immediately to the currently selected note
  useEffect(() => {
    setEditNote({ title: selectedNote.title, content: selectedNote.content });
  }, [selectedNote.title, selectedNote.content]);
  //Unsure about dependency array above. Had selectedNote.id but React threw a warning saying to include  dependencies.

  //Spreading the editNote in populates EditNote inputs with the current selectedNote title value
  const handleNameChange = (e) => {
    setEditNote({ ...editNote, title: e.target.value });
  };
  //Spreading the editNote in populates EditNote inputs with the current selectedNote content value
  const handleContentChange = (e) => {
    setEditNote({ ...editNote, content: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { id } = selectedNote;
    // axiosWithAuth().put(`/api/users/notes/${id}`, editNote);
    updateNote(selectedNote, notes, editNote)

  };

  if (notes.length > 0) {
    return (
      <div className="editNote">
        <form onSubmit={handleSubmit}>
          <textarea
            id="name"
            type="text"
            placeholder="Title"
            name="name"
            onChange={handleNameChange}
            value={editNote.title}
          />
          <br></br>
          <br></br>

          <textarea
            id="content"
            type="textarea"
            placeholder="Notes"
            name="notes"
            onChange={handleContentChange}
            value={editNote.content}
          />
          <br></br>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  } else {
    return null;
  }
};

export default EditNote;
