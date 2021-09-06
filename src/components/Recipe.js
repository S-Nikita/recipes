import React from 'react'
import { navigate } from 'gatsby'
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
    return (
        <div className="recipe-card__cover" onClick={() => navigate(`/recipes/${slug}`)}>
            <div className="recipe-card__img">
                <GatsbyImage image={getImage(picture.localFile)} alt={title} />
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
                        <Fire height="1.5rem" width="1.5rem" />
                        <p>{calories_100}<br />кКал</p>
                    </div>
                    <div className="recipe-card_nutrition--time">
                        <Time height="1.5rem" width="1.5rem" />
                        <p>{time} мин</p>
                    </div>
                    <div className="recipe-card_nutrition--difficulty">
                        <Fork className={`${difficulty >= 1 ? 'svg_color' : 'svg_non_color'}`} height="1.5rem" width="1.5rem" />
                        <Fork className={`${difficulty >= 2 ? 'svg_color' : 'svg_non_color'}`} height="1.5rem" width="1.5rem" />
                        <Fork className={`${difficulty === 3 ? 'svg_color' : 'svg_non_color'}`} height="1.5rem" width="1.5rem" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe
