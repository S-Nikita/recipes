import { Link } from 'gatsby'
import React, { useState, useCallback } from 'react'
import Title from './Title'
import Recipe from './Recipe'
import Dropdown from '../components/Dropdown'
import itemsDropdown from '../constants/dropdown_menu'
import SearchBar from '../components/SearchBar'

const Recipes = ({ recipes, title, showLink, showNav, category_title }) => {
    const [cards, setCards] = useState([])
    const callback = useCallback((cards) => {
        setCards(cards)
    }, [])
    console.log(cards)
    return (
        <section className="last_recipes">
            <Title title={title} />
            {showNav && <div className="recipes_navigation">
                <Dropdown title="Категория" items={itemsDropdown} category_title={category_title} />
                <SearchBar recipes={recipes} parentCallback={callback} />
            </div>
            }
            <div className="recipes-center">
                {cards.map((card, index) => {
                    return (
                        <Recipe key={card.id} index={index} {...card} />
                    )
                })}
            </div>
            {cards.length == 0 ?
                <div className="div_not_found">
                    <h4>Извините, но по Вашему запросу ничего не найдено.</h4>
                    <p>Попробуйте изменить запрос или поискать в других категориях</p>
                </div> : ''}
            {showLink && <Link to="/recipes/" className="btn btn-last_recipes">Все рецепты</Link>}
        </section>
    )
}

export default Recipes
