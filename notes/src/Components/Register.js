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
                <label>
                    Username:
                    <input
                    type="text"
                    name="name"
                    onChange={handleNameChange}
                    value={regName.username}
                    />
                </label>
                <label>
                    Password:
                    <input
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