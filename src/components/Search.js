import React from "react"
import Movie from "./Movie";

export default function Search (props){
    const [formData, setFormData] = React.useState(
        {
            searchTerm: "",

        })

        function handleChange(event) {
            setFormData({
                searchTerm: event.target.value
              });
            }

    const searchElements = props.searchResults.length ? props.searchResults.map(res=>{
        return <Movie data={res} />
    }) : <p>no results</p>

    //limit api requests by using onSubmit, don't overtax api.
    return (
        <div>

            <div className={`search-container ${props.darkMode ? "dark" : ""}`}>
            <form  onSubmit={props.handleSearch}>
                <input
                type="text"
                placeholder="Search for a movie"
                onChange={handleChange}
                name="searchTerm"
                value={formData.searchTerm}

                />
            </form>
            {searchElements}
            </div>
        </div>
    )
}
