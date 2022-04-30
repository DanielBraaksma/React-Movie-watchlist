export default function Watch (props) {
    return (
        <div>

            <div className={`watch-container ${props.darkMode ? "dark" : ""}`}>
                {props.watchlist}

            </div>

        </div>
    )
}
