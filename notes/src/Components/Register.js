import React, {useState} from 'react';

const Register  = () => {
    const [regName, setRegName] = useState({ username: "", password: ""})

    const handleNameChange = (e) => {
        setRegName({ ...regName, username: e.target.value })
        console.log("Name", regName.username)
    }
    const handlePasswordChange = (e) => {
        setRegName({ ...regName, password: e.target.value })
        console.log("Password", regName.password)
    }
    return (
        <div>
            <h1>Register</h1>
            <form>
                <label for="username">
                <input
                id="name"
                type="text"
                name="name"
                onChange={handleNameChange}
                value={regName.username}
                />
                </label>
                <label for="password">
                <input
                id="password"
                type="text"
                name="password"
                onChange={handlePasswordChange}
                value={regName.password}
                />
                </label>
            </form>
        </div>
    )
};

export default Register;