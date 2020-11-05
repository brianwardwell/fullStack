import React from 'react';

const EditNote = (props) => {
    return (
        <div className="editNote">
            <form>
                <input type='text' placeholder='Untitled' id='Test' /><br></br><br></br>
                <input type='text' placeholder='Notes' name='notes'/>
            </form>
        </div>
    )
}

export default EditNote;