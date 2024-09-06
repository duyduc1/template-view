import React from "react";
import "./Home.css"
import { IoMail } from "react-icons/io5";

function Home() {
    return (
        <div className="container">
            <div className="homepage">
                <h1 className="rainbow-text">The Future of Subcriptions</h1>
                <p>Now View all of your recurring subcriptions in one place!<br />Bills Online & get up <b className="rainbow-text" style={{ fontSize: "27px", fontWeight: "700" }} >100% Cash Back</b></p>

                <form action="" className="your-mail">
                    <div className="form-input">
                        <IoMail className="icon-input-email" />
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <button>Get Started</button>
                </form>
                <p style={{ fontSize: "15px", fontWeight: "500", marginTop: "20px" }}>
                    *No personal guarantee or personal credit check required
                </p>
            </div>
        </div>
    )
}

export default Home;