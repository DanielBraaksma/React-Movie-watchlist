import Navbar from "./components/Navbar"
import React from "react"
import Search from "./components/Search";

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
            <Search />
            
        </div>
    )
}
