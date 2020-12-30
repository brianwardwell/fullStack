import React, { useState } from 'react'

const Login = () => {
    const [loginCred, setLoginCred] = useState({username: '', password: ''})

    const handleNameChange = (e) => {
        setLoginCred({...loginCred, username: e.target.value})
        console.log("EVENT", e.target.value)
    }

    const handlePasswordChange = (e) => {
        setLoginCred({...loginCred, password: e.target.value})
    }

    const submitLogin = (e) => {
        console.log("LOGIN SUBMISSION", loginCred)
        e.preventDefault();
    }

    return (
    <div>
        <form onSubmit={submitLogin}>
            <h1>Login</h1>
            <label>
                Username:
                <input
                type="text"
                name="name"
                value={loginCred.username}
                onChange={handleNameChange}
                />               
            </label>
            <label>
                Password:
                <input
                type="text"
                name="name"
                value={loginCred.password}
                onChange={handlePasswordChange}
                />
            </label>
            <input type="submit" value="Submit"/>
        </form>
    </div>
    )
}

export default Login
