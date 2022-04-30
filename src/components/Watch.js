import Staricon from "../images/staricon.png"
import Removeiconblack from "../images/minusiconblack.png"
import Removeiconwhite from "../images/minusiconwhite.png"

export default function Watch (props) {

    let removeIcon = props.darkMode? Removeiconwhite : Removeiconblack;

    const watchlistElements = props.watchlist.map(movie=>{
        return (
            <div className="movie-card">
                <img className="movie-img" src={movie.Poster} />
                <div className="movie-info">
                    <h2 className="movie-title">{movie.Title}</h2>
                    <span className="rating-container"><img src={Staricon} className="star" />{movie.Rating}</span>

                    <div className="subtitle">
                        <p>{movie.Year}</p><p>{movie.Genre}</p>
                        <button onClick={()=>props.removeFromWatchlist(movie.Id)} className="removeBtn"><img src={removeIcon} />Remove</button>
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
