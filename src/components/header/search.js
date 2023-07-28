import React from "react"
import SearchWrapper from './search.styled'

const Search = () => {
    return (
        <SearchWrapper>
            <input type="text" placeholder='Search'/>
            <button>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <use href="#search"/>
                </svg>
            </button>
        </SearchWrapper>
    )
}

export default Search