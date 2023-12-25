import React from "react"
import ReactDOM from "react-dom"
import About from "./components/About"
import Info from "./components/Info"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
    return(
        <div className="paddingadd">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}