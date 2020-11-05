import React from 'react'
import Note from './Note'

// NotesList will map through all of the Notes for the given user and then render each Note component
const NotesList = ({notes}) => {
    return(
        <div className="notesList">
           {notes.map(note => {return (<Note notes={notes}/>)})}
        </div>
    )
}

export default NotesList;