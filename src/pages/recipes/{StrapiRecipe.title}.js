import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Fire from '../../assets/fire.svg'
import Time from '../../assets/stopwatch.svg'
import Fork from '../../assets/fork.svg'

const RecipeTemplate = ({ pageContext: { title }, data }) => {
    const { strapiRecipe: recipe } = data
    let { localFile: image } = recipe.picture
    return (
        <>
            <main className="strapi-recipe">
                <h2>{title}</h2>
                <div className="recipe-img">
                    <GatsbyImage image={getImage(image)} alt={title} />
                </div>
                <div className="recipe-card_nutrition">
                    <div className="recipe-card_nutrition--calories">
                        <Fire stroke="white" height="1.5rem" width="1.5rem" />
                        <p>{recipe.calories_100}<br />кКал</p>
                    </div>
                    <div className="recipe-card_nutrition--time">
                        <Time stroke="white" height="1.5rem" width="1.5rem" />
                        <p>{recipe.time} мин</p>
                    </div>
                    <div className="recipe-card_nutrition--difficulty">
                        <Fork stroke={`${recipe.difficulty >= 1 ? '#FF5364' : 'white'}`} height="1.5rem" width="1.5rem" />
                        <Fork stroke={`${recipe.difficulty >= 2 ? '#FF5364' : 'white'}`} height="1.5rem" width="1.5rem" />
                        <Fork stroke={`${recipe.difficulty === 3 ? '#FF5364' : 'white'}`} height="1.5rem" width="1.5rem" />
                    </div>
                </div>
                <div className="strapi-recipe_description">
                    <h3>Описание</h3>
                    <p>{recipe.description}</p>
                </div>
                <div className="strapi-recipe_nutrition">
                    <h3>Питательная ценность</h3>
                    <div className="strapi-recipe_nutrition--table">
                        <div className="portion">
                            <h4>На порцию</h4>
                            <ul className="portion_ul-text">
                                <li className="li_text">Белки, г:</li>
                                <li className="li_text">Жиры, г:</li>
                                <li className="li_text">Углеводы, г:</li>
                                <li className="li_text">Калории, кКал:</li>
                            </ul>
                            <ul className="portion_ul-numbers">
                                <li className="li_numbers">{recipe.protein_portion}</li>
                                <li className="li_numbers">{recipe.fat_portion}</li>
                                <li className="li_numbers">{recipe.carbs_portion}</li>
                                <li className="li_numbers">{recipe.calories_portion}</li>
                            </ul>
                        </div>
                        <div className="standart_calories">
                            <h4>На 100 г продукта</h4>
                            <ul className="portion_ul-text">
                                <li className="li_text">Белки, г:</li>
                                <li className="li_text">Жиры, г:</li>
                                <li className="li_text">Углеводы, г:</li>
                                <li className="li_text">Калории, кКал:</li>
                            </ul>
                            <ul className="portion_ul-numbers">
                                <li className="li_numbers">{recipe.protein_100}</li>
                                <li className="li_numbers">{recipe.fat_100}</li>
                                <li className="li_numbers">{recipe.carbs_100}</li>
                                <li className="li_numbers">{recipe.calories_100}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="strapi-recipe_preparation">
                    <div className="ingridients">
                        <h3>Ингридиенты</h3>
                        <ul className="ingridients_list">
                            {recipe.ingridient_item.map(ingridient => {
                                return (
                                    <li className="ingridient_item" key={ingridient.id}>{ingridient.ingridients_item}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="directions">
                        <h3>Инструкция</h3>
                        <ul className="ingridients_list">
                            {recipe.direction_item.map(direction => {
                                return (
                                    <li className="direction_item" key={direction.id}>{direction.direction_item}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export const query = graphql`
    query getSingleRecipe($title: String) {
    strapiRecipe(title: {eq: $title}) {
        title
        calories_100
        calories_portion
        carbs_100
        carbs_portion
        fat_100
        fat_portion
        description
        difficulty
        protein_100
        protein_portion
        time
        picture {
            localFile {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                }
            }
        }
        ingridient_item {
        id
        ingridients_item
        }
        direction_item {
        direction_item
        id
        }
    }
    }
`

export default RecipeTemplate
