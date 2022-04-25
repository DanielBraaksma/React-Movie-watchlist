
export default function Search (props){


    return (
        <div>

            <div className={`search-container ${props.darkMode ? "dark" : ""}`}>
            <form  onSubmit={props.handleChange}>
                <input
                type="text"
                placeholder="Search for a movie"

                />
            </form>
                <p>Test</p>

            </div>

        </div>
    )
}
