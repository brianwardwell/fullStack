import React, { useEffect, useState } from "react";
import axiosWithAuth from "../axiosWithAuth";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  box: {
    paddingLeft: "35px",
    paddingTop: "40px",
    width: "90%",
    overflowWrap: "break-word",
    marginBottom: "30px",
  },
  button: {
    marginLeft: "35px",
    marginTop: "50px",
    backgroundColor: "rgb(135,63, 163)",
    color: "white",
  },
}));

const EditNote = ({ selectedNote, notes, updateNote }) => {
  const [editNote, setEditNote] = useState({ title: "", content: "" });
  const style = useStyles();
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
    const { id } = selectedNote;
    axiosWithAuth().put(`/api/users/notes/${id}`, editNote);
    updateNote(selectedNote, editNote);
  };

  if (notes.length > 0) {
    return (
      <div className="editNote">
        <form onSubmit={handleSubmit}>
          <TextField
            multiline
            variant="outlined"
            className={style.box}
            id="name"
            type="text"
            placeholder="Title"
            name="name"
            onChange={handleNameChange}
            value={editNote.title}
          />

          <TextField
            className={style.box}
            multiline
            id="content"
            type="textarea"
            placeholder="Notes"
            name="notes"
            onChange={handleContentChange}
            value={editNote.content}
          />

          <Button className={style.button} variant="contained" type="submit">
            Save Changes
          </Button>
        </form>
      </div>
    );
  } else {
    return null;
  }
};

export default EditNote;
