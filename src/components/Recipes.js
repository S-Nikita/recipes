import { Link } from 'gatsby'
import React from 'react'
import Title from './Title'
import Recipe from './Recipe'
import Dropdown from '../components/Dropdown'
import itemsDropdown from '../constants/dropdown_menu'
import SearchBar from '../components/SearchBar'

const Recipes = ({ recipes, title, showLink, showNav, category_title, itemLayout }) => {
    console.log(itemLayout)
    return (
        <section className="last_recipes">
            <Title title={title} />
            {showNav && <div className="recipes_navigation">
                <Dropdown title="Категория" items={itemsDropdown} category_title={category_title} />
                <SearchBar />
            </div>
            }
            <div className={`${itemLayout > 3 ? 'recipes-center recipes-center__flex' : 'recipes-center'}`}>
                {recipes.map((recipe, index) => {
                    return (
                        <Recipe key={recipe.id} index={index} {...recipe} itemLayout={itemLayout} />
                    )
                })}
            </div>
            {showLink && <Link to="/recipes/" className="btn btn-last_recipes">Все рецепты</Link>}
        </section>
    )
}

export default Recipes
