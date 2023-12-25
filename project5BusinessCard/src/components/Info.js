import React from "react"
import ReactDOM from "react-dom"
import Img from "../images/coollinkbotw.jpg"
import Img2 from "../images/Mail.png"
import Img3 from "../images/linkedin.png"

export default function Info() {
    return(
        <div className="Info">
            <img src={Img} alt="profile photo" />
            <h2 className="name">Aditya Belgaonkar</h2>
            <h4 className="position">Frontend Developer</h4>
            <a href="#" ><small>adityabelgaonkar.website</small></a>

            <div className="buttonlinks">
                <button className="email">
                    <img src={Img2}></img>Email
                </button>

                <button className="linkedin">
                <img src={Img3}></img>LinkedIn
                </button>
            </div>
        </div>
    )
}