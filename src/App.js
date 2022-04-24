import Navbar from "./components/Navbar"
import React from "react"

export default function App () {
    const [searching, setSearching] = React.useState(true);

    function handleNavigation (){
        setSearching(prevSearching=>!prevSearching);
    }


    return (
        <div className="main-container">
            <Navbar
                searching={searching}
                handleClick={handleNavigation}
            />
        </div>
    )
}
