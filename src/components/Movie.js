import React from "react"

export default function Movie (props) {
    const [movieData, setMovieData] = React.useState([])



    React.useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ad56d582&t=${props.data}`)
        .then(res=>res.json())
        .then(data=> setMovieData(data))


    }, [props])

    console.log(movieData)
    return (
        <div className="movie-card">
            <p>{movieData.Title}</p>
            <img src={movieData.Poster} />
        </div>
    )
}
