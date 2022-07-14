import React from "react";
import ReactDOM from "react-dom";

export default function Footer() {
    return (
        <div className = "footer">
            <a href = "#"> <img className = "footer--twitter footer--logo" src = "../images/twitter-square-brands.svg" alt = "twitter-logo"/> </a>
            <a href = "#"> <img className = "footer--facebook footer--logo" src = "../images/facebook-square-brands.svg" alt = "facebook-logo"/> </a>
            <a href = "#"> <img className = "footer--instagram footer--logo" src = "../images/instagram-square-brands.svg" alt = "instagram-logo"/> </a>
            <a href = "#"> <img className = "footer--github footer--logo" src = "../images/github-square-brands.svg" alt = "github-logo"/> </a>
        </div>
    )
} 