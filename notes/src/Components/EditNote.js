import React from "react";

const EditNote = (props) => {
  const handleNameChange = (e) => {
    props.setEditTitle(e.target.value);
    console.log('name', e.target.value)
  };
  const handleContentChange = (e) => {
    props.setEditContent(e.target.value);
    console.log('content', e.target.value)
  };
  const submitNameHandler = (e) => {
    e.preventDefault();
    props.setEditTitle('')
    console.log(props.editTitle)
  }
  const submitContentHandler = (e) => {
    e.preventDefault();
    props.setEditContent('')
  }

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
            // value={props.editTitle}
          />
          <br></br>
          <button /*onClick={submitNameHandler}*/>Save Title</button>
          <br></br>
          {/* <button onClick={props.setEditTitle}>Save Name</button> */}
          <br></br>

          <input
            id="content"
            type="text"
            placeholder="Notes"
            name="notes"
            onChange={handleContentChange}
            // value={props.editContent}
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
