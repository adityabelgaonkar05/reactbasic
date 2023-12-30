import React from "react"
import locationimg from "../images/locationimg.png"

export default function Card(props) {
    return(
        <div className="Card">
            <a href={props.item.GMaps} target="blank" className="ImageLink"><img src={props.item.ImgURL} className="Image" /></a>
            <div className="content">
                <div className="Country"><img src={locationimg} className="locationpointer"/><span className="Title">{props.item.Country}</span></div>
                <h1 className="Location">{props.item.Location}</h1>
                <span className="Dates"><b>{props.item.Start} - {props.item.End}</b></span>
                <div className="Description">{props.item.Description}</div>
            </div>
        </div>
    )
}