import Staricon from "../images/staricon.png"
import Removeicon from "../images/minusicon.png"

export default function Watch (props) {

    const watchlistElements = props.watchlist.map(movie=>{
        return (
            <div className="movie-card">
                <img className="movie-img" src={movie.Poster} />
                <div className="movie-info">
                    <h2 className="movie-title">{movie.Title}</h2>
                    <span className="rating-container"><img src={Staricon} className="star" />{movie.Rating}</span>

                    <div className="subtitle">
                        <p>{movie.Year}</p><p>{movie.Genre}</p>
                        <button onClick={()=>movie.removeFromWatchlist(movie.Title)} className="removeBtn"><img src={Removeicon} />Remove</button>
                    </div>
                    <p>{movie.Plot}</p>
                </div>
            </div>
        )
    })

    return (
        <div>

            <div className={`watch-container ${props.darkMode ? "dark" : ""}`}>
                {watchlistElements}
            </div>

        </div>
    )
}
