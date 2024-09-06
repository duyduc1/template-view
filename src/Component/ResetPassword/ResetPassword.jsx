import React, { useState } from "react";
import "./ResetPassword.css";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function ResetPassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [searchParams] = useSearchParams();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Passwords do not match!")
            return;
        }

        const token = searchParams.get("token");

        try {
            const response = await axios.post("http://localhost:3030/auth/reset-password", {
                password: password
            }, {
                params: { token }
            });
            console.log(response);
            setMessage(response.data);
        } catch (error) {
            setMessage("Error while resetting password.");
        }
    }

    return (
        <div className="container-resetpass">
            <form>
                <h2 className="design-email" style={{ fontSize: "40px" }}>Reset Your Password</h2>
                <div className="inputBox-pass">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span>Enter your password</span>
                </div>
                <br />
                <div className="inputBox-pass">
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <span>Confirm your password</span>
                </div>
                <button className="inpBox-btn" type="submit" onClick={handleSubmit}>Reset Password</button>
                {message && <p style={{ fontWeight: "bold", color: "#ee8456", marginTop: "1rem" }}>{message}</p>}
            </form>
        </div>
    )
}

export default ResetPassword;