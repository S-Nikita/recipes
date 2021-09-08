import React from 'react'
import Search from '../assets/loupe.svg'
const SearchBar = () => {
    return (
        <form className="search_form">
            <label for="search">Поиск</label>
            <input id="search" type="text" placeholder="Найти рецепт ..." autofocus required />
            <button type="submit">
                <Search></Search>
            </button>
        </form>
    )
}

export default SearchBar
