import React from "react"
import Staricon from "../images/staricon.png"
import Addicon from "../images/addicon.png"

export default function Movie(props) {
    const [movieData, setMovieData] = React.useState([])



    React.useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ad56d582&t=${props.data}`)
            .then(res => res.json())
            .then(data => setMovieData(data))


    }, [props])

    console.log(movieData)
    return (
        <div className="movie-card">
            <img className="movie-img" src={movieData.Poster} />
            <div className="movie-info">
                <p className="movie-title">{movieData.Title}</p>
                <span className="rating-container"><img src={Staricon} />{movieData.imdbRating}</span>

                <div className="subtitle">
                    <p>{movieData.Year}</p><p>{movieData.Genre}</p>
                    <button className="addBtn"><img src={Addicon} />Add to Watchlist</button>
                </div>
                <p>{movieData.Plot}</p>
            </div>
        </div>
    )
}
