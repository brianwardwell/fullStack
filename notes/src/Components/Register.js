import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

//Register does NOT require axiosWithAuth

const Register  = () => {
    const [regCred, setRegCred] = useState({ username: "", password: ""})
    const history = useHistory();
    const handleNameChange = (e) => {
        setRegCred({ ...regCred, username: e.target.value })
        console.log("Name", regCred.username)
    }
    const handlePasswordChange = (e) => {
        setRegCred({ ...regCred, password: e.target.value })
        console.log("Password", regCred.password)
    }
    //changed url from /users to /users/signIn, will do same for login
    const submitNewUser = (e) => {
        e.preventDefault();
        axios.post('/api/auth/signIn', regCred);
        history.push('/users/login')
        console.log("HISTORY", history)
        setRegCred({ username: "", password: "" })
        
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={submitNewUser}>
                <label>
                    Username:
                    <input
                    type="text"
                    name="name"
                    onChange={handleNameChange}
                    value={regCred.username}
                    />
                </label>
                <label>
                    Password:
                    <input
                    type="text"
                    name="password"
                    onChange={handlePasswordChange}
                    value={regCred.password}
                    />
                </label>
                <input  type="submit" value="Submit"/>
            </form>
        </div>
    )
};

export default Register;
