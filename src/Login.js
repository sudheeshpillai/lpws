import React from 'react';
import './login.css';

const Login = ({ username, password, rememberMe, invalidCredentials, onLogin, onRememberMe, onInputChange }) => {
    return (
        <form onSubmit={onLogin}>
            <div className="imgcontainer">
                <img style={{ width: '150px' }}
                    src="https://www.w3schools.com/howto/img_avatar2.png"
                    alt="Avatar"
                    className="avatar" />
            </div>
            <div className="container">
                {
                    invalidCredentials &&
                    <div className="error">Username/Password is not valid.</div>
                }
                <label><b>Username</b></label>
                <input
                    type="text"
                    placeholder="Enter Username"
                    required
                    value={username}
                    onChange={(e) => onInputChange('username', e.target.value)}
                />
                <label><b>Password</b></label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    required
                    value={password}
                    onChange={(e) => onInputChange('password', e.target.value)}
                />
                <button type="submit" onClick={onLogin}>Login</button>
                <div>
                    <label>
                        <input type="checkbox" checked={rememberMe} onChange={onRememberMe} />
                        Remember me
                    </label>
                    <a role="button" className="forgot-password" >Forgot password?</a>
                </div>
            </div>
        </form>
    );
}

export default Login;
