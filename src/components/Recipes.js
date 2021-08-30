import { Link } from 'gatsby'
import React from 'react'
import Title from './Title'
import Recipe from './Recipe'
const Recipes = ({recipes, title, showLink}) => {
    return (
        <section className="last_recipes">
            <Title title={title} />
            <div className="recipes-center">
                {recipes.map((recipe) => {
                    return <Recipe key={recipe.id} {...recipe} />
                })}
            </div>
            {showLink && <Link to="/recipes" className="btn center-btn">Все рецепты</Link>}
        </section>
    )
}

export default Recipes
