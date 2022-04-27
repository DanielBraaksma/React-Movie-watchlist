import Navbar from "./components/Navbar"
import React from "react"
import Search from "./components/Search";
import Watch from "./components/Watch";

export default function App() {
    const [searching, setSearching] = React.useState(true);
    const [searchResults, setSearchResults] = React.useState([])
    const [darkMode, setDarkMode] = React.useState( //Lazily initialize state & check if local storage darkmode exists
        () => JSON.parse(localStorage.getItem("darkMode") || false)
    )
    const [watchlist, setWatchlist] = React.useState( //lazy initialize watchlist & local storage check
        () => JSON.parse(localStorage.getItem("watchlist")) || []
    )


    // handle any of the situations where we need to keep local storage insync with state

    React.useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode))
        localStorage.setItem("watchlist", JSON.stringify(watchlist))
        localStorage.setItem("searchResults", JSON.stringify(searchResults))

    }, [darkMode, watchlist, searchResults])

    function handleSearch(event) {
        event.preventDefault();
        let search = event.target.searchTerm
        let searchArray;

        fetch(`http://www.omdbapi.com/?apikey=ad56d582&s=${search.value}`)
        // fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ad56d582&s=${search.value}`)
            .then(res => res.json())
            .then(data => {
                setSearchResults(data.Search);
            })
            .catch(console.error())
        }
tesssstest
    function toggleDarkMode() {
                    setDarkMode(prevMode => !prevMode)
                }

    function handleNavigation() {
                    setSearching(prevSearching => !prevSearching);
                }



    return (
            <div className="main-container">
                <Navbar
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                    searching={searching}
                    handleClick={handleNavigation}
                />
                {searching && <Search
                    searchResults={searchResults}
                    darkMode={darkMode}
                    handleSearch={handleSearch}
                />}
                {!searching && <Watch
                    darkMode={darkMode}
                />}

            </div>
        )
    }
