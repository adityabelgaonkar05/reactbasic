import React from "react"
import ReactDOM from "react-dom"
import twitter from "../images/Twitter.png"
import facebook from "../images/Facebook.png"
import insta from "../images/Instagram.png"
import github from "../images/GitHub.png"

export default function Footer() {
    return(
        <div className="socials">
            <a href="#"><img src={twitter}></img></a>
            <a href="#"><img src={facebook}></img></a>
            <a href="#"><img src={insta}></img></a>
            <a href="https://github.com/adityabelgaonkar05/" target="blank"><img src={github}></img></a>
        </div>
    )
}