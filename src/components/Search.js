
export default function Search (props){


    return (
        <div>

            <div className={`search-container ${props.darkMode ? "dark" : ""}`}>
            <form>
                <input
                type="text"
                placeholder="Search for a movie"
                // onChange={handleChange}
                />
            </form>
                <p>Test</p>

            </div>

        </div>
    )
}
