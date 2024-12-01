import React from 'react';
import './Login.css';

function Login() {
    return (
        <>
            <body className="App-body">
                <p>Login to access the full dashboard</p>
                <label inputMode='email'>Email: </label>
                <input type='email' />
                <label inputMode='password'>Password: </label>
                <input type='password' />
                <button>OK</button>
            </body>
        </>
    );
};

export default Login;