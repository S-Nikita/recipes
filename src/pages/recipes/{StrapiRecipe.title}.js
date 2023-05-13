import React from 'react'
import { useState } from "react";
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Fire from '../../assets/fire.svg'
import Time from '../../assets/stopwatch.svg'
import Fork from '../../assets/fork.svg'
import Transition from '../../components/Transitions';
import gsap from 'gsap';

const RecipeTemplate = ({ pageContext: { title }, data, transitionStatus }) => {
    const { strapiRecipe: recipe } = data
    const recipeTransition = gsap.timeline()
    let { localFile: image } = recipe.picture

    const [checkedState, setCheckedState] = useState(
        new Array(recipe.ingridient_item.length).fill(false)
    )

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) => (
            index === position ? !item : item
        ))
        setCheckedState(updatedCheckedState);
    }
    // sort direction_items
    function compare(a, b) {
        if (a.id < b.id) {
            return -1
        }

        if (a.id > b.id) {
            return 1
        }

        return 0
    }
    recipe.direction_item.sort(compare)

    // sort ingridient_items
    recipe.ingridient_item.sort(compare)

    // get video language
    let classNameLanguage = ''
    if (recipe.video_language !== '') {
        if (recipe.video_language === 'EN') {
            classNameLanguage = 'video_en'
        } else {
            classNameLanguage = 'video_ru'
        }
    }

    return (
        <>
            <Transition timeline={recipeTransition} />
            <main className="strapi-recipe">
                <h2>{title}</h2>
                <div className='recipe-container'>
                    <div className='recipe-image-container'>
                        <div className="recipe-img">
                            <GatsbyImage image={getImage(image)} alt={title} />
                        </div>
                        <div className="recipe-card_nutrition--strapi">
                            <div className="recipe-card_nutrition--calories--strapi">
                                <Fire height="2rem" width="2rem" />
                                <p>{recipe.calories_100} кКал</p>
                            </div>
                            <div className="recipe-card_nutrition--time--strapi">
                                <Time height="2rem" width="2rem" />
                                <p>{recipe.time} мин</p>
                            </div>
                            <div className="recipe-card_nutrition--difficulty--strapi">
                                <p>Сложность:</p>
                                <Fork className={`${recipe.difficulty >= 1 ? 'svg_color' : ''}`} height="2rem" width="2rem" />
                                <Fork className={`${recipe.difficulty >= 2 ? 'svg_color' : ''}`} height="2rem" width="2rem" />
                                <Fork className={`${recipe.difficulty === 3 ? 'svg_color' : ''}`} height="2rem" width="2rem" />
                            </div>
                        </div>
                    </div>
                    <div className="strapi-recipe_main-description">
                        <div className="strapi-recipe_description">
                            <h3>Описание</h3>
                            <div className="recipe_desc_strapi">
                                <p>
                                    {recipe.author && recipe.author_link ? 'Автор рецепта ' : ''}
                                    {recipe.author && recipe.author_link ? <a href={recipe.author_link}>{recipe.author}</a> : ''}
                                    {recipe.author && recipe.author_link ? <br></br> : ''}
                                    {recipe.author && recipe.author_link ? <br></br> : ''}
                                    {recipe.description}
                                    {recipe.link ? <br></br> : ''}
                                    {recipe.link ? <br></br> : ''}
                                    {recipe.link ? 'Видео ' : ''}
                                    {recipe.link ? <a href={recipe.link} className={`video_url ${classNameLanguage}`}>инструкция</a> : ''}
                                </p>
                            </div>
                        </div>
                        <div className="strapi-recipe_nutrition">
                            <h3>Питательная ценность</h3>
                            <div className="strapi-recipe_nutrition--table">
                                <div className="portion">
                                    <h4 className="portion_heading">На порцию</h4>
                                    <div className="portion_ul">
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
                                </div>
                                <div className="vl"></div>
                                <div className="standart_calories">
                                    <h4 className="portion_heading_100">На 100г</h4>
                                    <div className="standart_calories_ul">
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
                        </div>
                    </div>
                </div>
                <div className="directions-container">
                    <div className="ingridients">
                        <h3 className="strapi_recipe_h3">Ингредиенты</h3>
                        <ul className="ingridients_list">
                            {recipe.ingridient_item.map((ingridient, index) => {
                                return (
                                    <li className="ingridient_item" key={ingridient.id}>
                                        <input type="checkbox"
                                            id={`custom-checkbox-${ingridient.id}`}
                                            name={ingridient.ingridients_item}
                                            value={ingridient.ingridients_item}
                                            checked={checkedState[index]}
                                            onChange={() => handleOnChange(index)}
                                        />
                                        <label htmlFor={`custom-checkbox-${ingridient.id}`}
                                            className={`${checkedState[index] ? 'checked ' : ''}checkbox_ingridients`}>
                                            {ingridient.ingridients_item}
                                            <span className="checkmark" key={ingridient.id}></span>
                                        </label>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="directions">
                        <h3 className="strapi_recipe_h3">Процесс приготовления</h3>
                        <ul className="directions_list">
                            {recipe.direction_item.map((direction, index) => {
                                return (
                                    <li className="direction_item" key={direction.id}>
                                        <span className="circle_number" key={direction.id}>{index + 1}</span>
                                        <p key={direction.id}>{direction.direction_item}</p>
                                    </li>
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
        author
        author_link
        title
        calories_100
        calories_portion
        carbs_100
        carbs_portion
        fat_100
        fat_portion
        description
        difficulty
        link
        protein_100
        protein_portion
        time
        video_language
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
