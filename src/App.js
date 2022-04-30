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

    async function handleSearch(event) {
        event.preventDefault();
        const search = event.target.searchTerm
        const res1 = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ad56d582&s=${search.value}`)
        const data =  await res1.json()
        const newSearchArray = data.Search.map(movie=>{return movie.Title})
        setSearchResults(newSearchArray)
        // console.log(test)
        }

        console.log(searchResults)

    function addToWatchlist (e, movieData) {
        // let test = e.target.parentElement.disabled
        // console.log(this)
        // e.target.parentElement.disabled = true;
        let newMovie = {
                Poster: movieData.Poster,
                Title: movieData.Title,
                Rating: movieData.imdbRating,
                Year: movieData.Year,
                Genre: movieData.Genre,
                Plot:movieData.Plot,
                Id: movieData.imdbID,
            }


        setWatchlist(prevWatchList=>[...prevWatchList, newMovie])
}

function removeFromWatchlist (id){
    console.log(id)
    setWatchlist(prevWatchList=>prevWatchList.filter(movie=>{
        return movie.Id !== id;
    }))
}

console.log(watchlist)

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
                    addToWatchlist={addToWatchlist}
                />}
                {!searching && <Watch
                    darkMode={darkMode}
                    watchlist={watchlist}
                    removeFromWatchlist={removeFromWatchlist}
                />}

            </div>
        )
    }
