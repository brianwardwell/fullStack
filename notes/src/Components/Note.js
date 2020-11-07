import React from 'react';

const Note = ({notes, editTitle, editContent}) => {
   
    if (notes.length > 0) {
    return (
        <div>
            <div  className="note">
                <h3>{notes[0].title}</h3>
                <h4>{notes[0].content}</h4>
            </div>
        </div>
    )
    } else {
        return null
    }
}

export default Note;