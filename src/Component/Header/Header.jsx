import React, { useState , useEffect  } from "react";
import { Link } from "react-router-dom";
import { FaBrain } from "react-icons/fa";
import Login from "../Login/Login";
import "./Header.css";

function Header() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setShowLoginForm(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
    };

    return (
        <>
            <header>
                <nav className="header">
                    <ul>
                        <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "30px" }}>
                            <Link to="/"><FaBrain color="yellow" style={{ fontSize: "3rem", marginTop: "5px" , display:"block" }} /></Link>
                            <Link className="desi-header" to="/" style={{ fontSize: "1.5rem", marginLeft: "5px", marginTop: "2px", textDecoration: "none" }}>DeSign Your Brain</Link>
                        </h1>
                        <div className="form-navbar">
                            <li><Link to="/product" className="hover-border">Products</Link></li>
                            <li><Link to="/solutions" className="hover-border" style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>Solutions</Link></li>
                            <li><Link to="/pricing" className="hover-border">Pricing</Link></li>
                        </div>
                        <div className="form-sign">
                            {isLoggedIn ? (
                                <li className="li1"><button onClick={handleLogout} style={{ background: "none", border: "none", cursor: "pointer", fontWeight: "bold" , color:"#fff"}}>Log Out</button></li>
                            ) : (
                                <>
                                    <li className="li1"><button onClick={toggleLoginForm} style={{ background: "none", border: "none", cursor: "pointer", fontWeight: "bold" , color:"#fff" }}>Log In</button></li>
                                    <li className="li2"><Link to="/register">Register</Link></li>
                                </>
                            )}
                        </div>
                    </ul>
                </nav>
            </header>

            <Login show={showLoginForm} onClose={toggleLoginForm} onLoginSuccess={handleLoginSuccess} />
        </>
    );
}

export default Header;
