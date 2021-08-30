import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Fire from '../assets/fire.svg'
import Time from '../assets/stopwatch.svg'
import Fork from '../assets/fork.svg'
const Recipe = ({
    title,
    picture,
    calories_100,
    time,
    difficulty,
    slug,
    category_item
}) => {
    let categories = category_item.map(category => {
        return category.title
    })
    let {localFile:image} = picture
    console.log(categories)
    return (
        <div className="recipe-card">
            <div className="recipe-card__cover">
                <div className="recipe-card__img">
                    <GatsbyImage image={getImage(image)} alt={title} />
                </div>
                <div className="recipe-card__cover-details">
                    <div className="recipe-card_category">

                    </div>
                    <div className="recipe-card_nutrition">
                        <div className="recipe-card_nutrition--calories">
                            <Fire />
                        </div>
                        <div className="recipe-card_nutrition--time">
                            <Time />
                        </div>
                        <div className="recipe-card_nutrition--time">
                            <Fork className="difficulty_1" />
                            <Fork className="difficulty_2" />
                            <Fork className="difficulty_3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe
