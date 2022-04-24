import Navbar from "./components/Navbar"
import React from "react"
import Search from "./components/Search";

export default function App () {
    const [searching, setSearching] = React.useState(true);
    const [darkMode, setDarkMode] = React.useState(true)

    function toggleDarkMode() {
        console.log("clicked")
        setDarkMode(prevMode => !prevMode)
    }

    function handleNavigation (){
        setSearching(prevSearching=>!prevSearching);
    }


    return (
        <div className="main-container">
            <Navbar
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                searching={searching}
                handleClick={handleNavigation}
            />
            <Search
              darkMode={darkMode}
            />

        </div>
    )
}
