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

    return (
    <div>
        <form>
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
        </form>
    </div>
    )
}

export default Login
