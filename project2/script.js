function Print() {
    return(
        <div>
            <h1>Hello this is written in react!</h1>
        </div>
    )
}

function Print2() {
    return(
        <ul>
                <li>1 thing</li>
                <li>2 thing</li>
                <li>3 thing</li>
        </ul>
    )
}

ReactDOM.render(
    <div>
        <Print></Print>
        <Print2></Print2>
    </div>,
    document.getElementById("content")
)

