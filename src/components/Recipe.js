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
    let {localFile:image} = picture
    return (
        <div className="recipe-card__cover">
            <div className="recipe-card__img">
                <GatsbyImage image={getImage(image)} alt={title} />
            </div>
            <div className="recipe-card__cover-details">
                <div className="recipe-card_category">
                    {category_item.map(category => {
                        return <span key={category.id}>{category.title}</span>
                    })}
                </div>
                <div className="recipe-card_title">
                        <h3>{title}</h3>
                </div>
                <div className="recipe-card_nutrition">
                    <div className="recipe-card_nutrition--calories">
                        <Fire stroke="white" height="1.5rem" width="1.5rem" />
                        <p>{calories_100}<br />кКал</p>
                    </div>
                    <div className="recipe-card_nutrition--time">
                        <Time stroke="white" height="1.5rem" width="1.5rem" />
                        <p>{time} мин</p>
                    </div>
                    <div className="recipe-card_nutrition--difficulty">
                        <Fork stroke={`${difficulty >= 1 ? '#FF5364' : 'white'}`}  height="1.5rem" width="1.5rem" />
                        <Fork stroke={`${difficulty >= 2 ? '#FF5364' : 'white'}`}  height="1.5rem" width="1.5rem" />
                        <Fork stroke={`${difficulty === 3 ? '#FF5364' : 'white'}`}  height="1.5rem" width="1.5rem" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe
