import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { AiFillCodepenSquare } from "react-icons/ai";
import { Link , useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role] = useState('USER');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const registrationRequest = {
            email: email,
            password: password,
            role: role
        };

        try {
            const response = await axios.post("http://localhost:3030/auth/signup", registrationRequest);
            if (response.data.statusCode === 200) {
                setMessage(response.data.message);
                setTimeout(() => {
                    navigate("/");
                },1000)

            } else {
                setMessage("Registration failed . Please try again. ");
            }
        } catch (error) {
            setMessage("Error: " + error.response?.data?.error || error.message);
        }
    }

    return (
        <div className="container-register" >
            <div className="icon-register">
                <div className="circle-around">
                    <AiFillCodepenSquare className="Aifill-Codepen" style={{ fontSize: '200px' }} />
                </div>
            </div>

            <div className="design-form">
                <h2 className="rainbow-text" >Member Register</h2>
                <form onSubmit={handleSubmit} className="form-register">
                    <div  className="sticker-input">
                        <MdEmail className="icon-input-form" />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email"
                        />
                    </div>

                    <div className="sticker-input">
                        <FaLock className="icon-input-form" />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Password"
                        />
                    </div>

                    <div className="sticker-input">
                        <FaUserAlt className="icon-input-form" />
                        <input
                            type="text"
                            value={role}
                            readOnly
                            required
                            style={{ opacity: "0.6" }}
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                    <p style={{marginTop:"15px"}}>
                        <Link to="/forgotpass">Forgot <b>Username</b> / <b>Password</b></Link>
                    </p>
                    {message && <p style={{fontWeight:"bold"}}>{message}</p>}
                </form>
                <p className="emoil-center">
                    <Link className="hover-link" to="/">Login with email and password</Link>
                    <FaArrowRight style={{marginLeft:"5px"}} />
                </p>
            </div>
        </div>
    )
}

export default Register;