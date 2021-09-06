import { Link } from 'gatsby'
import React from 'react'
import Title from './Title'
import Recipe from './Recipe'
const Recipes = ({ recipes, title, showLink }) => {
    return (
        <section className="last_recipes">
            <Title title={title} />
            <div className="recipes-center">
                {recipes.map((recipe, index) => {
                    return (
                        <Recipe key={recipe.id} index={index} {...recipe} />
                    )
                })}
            </div>
            {showLink && <Link to="/recipes/" className="btn btn-last_recipes">Все рецепты</Link>}
        </section>
    )
}

export default Recipes
