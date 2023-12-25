function Header() {
    return(
        <header className="header">
                <nav className="navbar">
                    <img src="../images/1611079.png" className="logoimg"></img>
                    <ul className="navigation">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>

                <h1>Reasons why React is cool!</h1>
        </header>
    )
}


function MainContent() {
    return(
        <ol className="ordered">
            <li>I like web development</li>
            <li>I cant come up with many reasons</li>
            <li>point 3</li>
        </ol>
    )
}

function Footer() {
    return(
        <footer>
                    <small>copyrights 2023 Belgaonkar development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return(
        <>
            <Header />

            <MainContent />

            <Footer />
        </>
    )
}

ReactDOM.render(
        <Page />,
         document.getElementById("root"))