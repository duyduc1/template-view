import React from "react";
import "./Login.css";
import { FaLockOpen } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Login({ show, onClose , onLoginSuccess  }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3030/auth/signin", {
                email: email,
                password: password
            });
            if (response.data.statusCode === 200) {
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('refreshToken', response.data.refreshToken)
                onLoginSuccess(response.data.message)
                setMessage(response.data.message)
            } else {
                setMessage("Đăng nhập thất bại");
            }
        } catch (error) {
            setMessage('Lỗi hệ thống: ' + error.message);
        }
    }

    if (!show) {
        return null;
    }

    return (
        <div className="login-form-overlay">
            <div className="login-form">
                <button className="close-button" onClick={onClose}>×</button>

                <div className="icon-login-lock">
                    <div className="circle-icon-login">
                        <FaLockOpen className="fa-lock-open" style={{ fontSize: "100px" }} />
                    </div>
                </div>

                <div>
                    <form className="form-login">
                        <h5 style={{ fontSize: "25px" }} className="rainbow-text">Login With User</h5>
                        <div className="form-group">
                            <MdEmail className="icon-login" />
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <FaLock className="icon-login" />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
                        </div>
                        <button type="submit" className="login-button" onClick={handleLogin}>Log In</button>
                        {message && <p>{message}</p>}
                        <p className="text-deco" style={{ marginTop: "15px" }}>
                            <Link to="/forgotpass">Forgot <b>Username</b> / <b>Password</b></Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;