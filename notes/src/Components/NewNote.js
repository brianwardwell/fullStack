import React  from "react";
import {Link, useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  contain: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '18vw',
    maxWidth: '250px',
    backgroundColor: '#21201f'
  },
  button: {
    marginTop: theme.spacing(6),
    width: '60%',
    backgroundColor: "rgb(135,63, 163)",
    color: 'white',
    borderRadius: "20px"
  }
}));


const NewNote = ({ deleteSelected, createNewNote, selectedNote, notes}) => {
  const style = useStyles();
  const history = useHistory();
  const onClick = () => {
    history.push('/users/login')
  }
  const handleDelete = () => {
    
    deleteSelected(selectedNote, notes);
  };

  return (
    <div className={style.contain}>
      <Button size='small' className={style.button} variant="contained" onClick={createNewNote}>New Note</Button>
      <Button size='small' className={style.button} variant="contained" onClick={handleDelete}>Delete Note</Button>
      <Button size='small' className={style.button} variant="contained" onClick={onClick}>Logout</Button>
    </div>
  )
};

export default NewNote;
