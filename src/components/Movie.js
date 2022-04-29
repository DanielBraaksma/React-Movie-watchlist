import React from "react"
import Staricon from "../images/staricon.png"
import Addicon from "../images/testicon.png"

export default function Movie(props) {
    const [movieData, setMovieData] = React.useState([])



    React.useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ad56d582&t=${props.data}`)
            .then(res => res.json())
            .then(data => setMovieData(data))


    }, [props])

    console.log(props)
    return (
        <div className="movie-card">
            <img className="movie-img" src={movieData.Poster} />
            <div className="movie-info">
                <h2 className="movie-title">{movieData.Title}</h2>
                <span className="rating-container"><img src={Staricon} className="star" />{movieData.imdbRating}</span>

                <div className="subtitle">
                    <p>{movieData.Year}</p><p>{movieData.Genre}</p>
                    <button onClick={props.addToWatchlist} className="addBtn"><img src={Addicon} />ADD</button>
                </div>
                <p>{movieData.Plot}</p>
            </div>
        </div>
    )
}
