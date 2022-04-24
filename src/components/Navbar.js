import React from "react"
// import Logo from "../images/logo.png"

export default function Navbar(props) {

    return (
        <nav>
           <h1>{props.searching? "Find Your Film" : "My Watchlist"}</h1>
           <h3 onClick={props.handleClick}>{props.searching? "My Watchlist" : "Find Your Film"}</h3>
        </nav>
    )
}
