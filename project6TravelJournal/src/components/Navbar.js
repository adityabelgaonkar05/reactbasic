import React from "react"
import Img from "../images/logo.png"

export default function Navbar() {
    return(
        <span className="Navbar">
            <img src={Img} className="LogoImg" />
            <div className="Nav-Title">my travel journal.</div>
        </span>
    )
}