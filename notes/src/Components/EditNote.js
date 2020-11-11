import React, { useState } from "react";

const EditNote = (props) => {
  const handleNameChange = (e) => {
   
    props.setEditTitle(e.target.value);
    
  };
  const handleContentChange = (e) => {
    props.setEditContent(e.target.value);
   
  };


  if (props.notes.length > 0) {
    return (
      <div className="editNote">
        <form>
          <input
            id="name"
            type="text"
            placeholder="Title"
            name="name"
            onChange={handleNameChange}
            
          />
          <br></br>
          {/* <button onClick={props.setEditTitle}>Save Name</button> */}
          <br></br>
          
          <input
            id="content"
            type="text"
            placeholder="Notes"
            name="notes"
            onChange={handleContentChange}
          />
        </form>
        <button onClick={props.editNotes}>Save Notes</button>
      </div>
      
    );
  } else {
    return null;
  }
};

export default EditNote;
