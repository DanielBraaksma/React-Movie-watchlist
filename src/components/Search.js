import React from "react"

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
                <p>Test</p>

            </div>

        </div>
    )
}
