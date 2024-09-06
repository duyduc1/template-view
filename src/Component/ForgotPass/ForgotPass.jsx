import React, { useState } from "react";
import "./ForgotPass.css"
import axios from "axios";

function ForgotPass() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3030/auth/forgot-password", { email });
            console.log(response);
            setMessage(response.data);
        } catch (error) {
            setMessage("Error while sending email.");
        }
    }

    return (
        <div className="container-forgotpass">
            <form className="inputBox" >
                <h2 className="design-email" style={{ fontSize: "3rem" }}>Forgot your Password</h2>
                <input type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <span>Enter your mail</span>
                <button type="submit" onClick={handleSubmit}>Send</button>
                {message && <p style={{fontWeight:"bold", color:"#ee8456", marginTop:"1rem"}}>{message}</p>}
            </form>
        </div>
    )
}

export default ForgotPass