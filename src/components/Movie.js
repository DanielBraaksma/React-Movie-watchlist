export default function Movie (props) {
    


    return (
        <div className="movie-card">
            <img src={props.data.Poster} />
        </div>
    )
}
