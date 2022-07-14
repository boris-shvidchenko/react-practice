import React from "react";
import ReactDOM from "react-dom";

export default function Info() {
    return (
        <div className = "info">
            <img className = "info--image" src = "./images/pexels-andrea-piacquadio.jpg" alt = "profile-picture"/>
            <h1 className = "info--name"> Random Name </h1>
            <h4 className = "info--title">Frontend Developer</h4>
            <a className = "info--link" href = "#">Visit my website!</a>
            <div className = "btn-container">
                <button className = "info--btn email-btn">
                    <img className = "info--email-logo info--logo" src = "./images/envelope-solid.svg" alt = "email-logo"/>
                    <p className = "info--email-text">Email</p>
                </button>
                <button className = "info--btn linkedin-btn">
                    <img className = "info--linkedin-logo info--logo" src = "./images/linkedin-brands.svg" alt = "linkedin-logo"/>
                    <p className = "info--linkedin-text">Linkedin</p>
                </button>
            </div>
        </div>
    )
}