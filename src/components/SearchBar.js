import React, { useState } from 'react'
import Search from '../assets/loupe.svg'
const SearchBar = ({ recipes, parentCallback }) => {
    const emptyQuery = ''
    const [state, setState] = useState({
        filteredData: [],
        query: emptyQuery
    })
    const handleInputChange = event => {
        const query = event.target.value
        const filteredData = recipes.filter(recipe => {
            const title = recipe.title
            return (
                title.toLowerCase().includes(query.toLowerCase())
            )
        })

        setState({
            query,
            filteredData
        })
    }
    const { filteredData, query } = state
    const hasSearchResults = filteredData && query !== emptyQuery
    const cards = hasSearchResults ? filteredData : recipes
    parentCallback(cards)
    return (
        <form className="search_form">
            <label for="search">Поиск</label>
            <input id="search" type="text" placeholder="Найти рецепт ..." autofocus required onChange={handleInputChange} />
            <button type="submit">
                <Search />
            </button>
        </form>
    )
}

export default SearchBar
