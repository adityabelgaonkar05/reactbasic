import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data.js"

import "./style.css"

export default function App() {
    const Cards = data.map(item => {
        return(
            <Card 
            key={item.id}
            item={item}
            />
        )
})
    return(
        <div>
            <Navbar />
            <div className="overflow-control">
                {Cards}
            </div>
        </div>
    )
}