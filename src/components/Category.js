import React from 'react'
import { navigate } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Category = () => {
    return (
        <section className="category" id="category_id">
            <h2>Категории</h2>
            <div className="category_images">
                <div className="category_img" onClick={() => navigate("/categories/breakfast/1")}>
                    <span className="circle"></span>
                    <StaticImage src="../assets/Breakfast.png" alt="Breakfast category" placeholder="blurred" />
                    <p>Завтраки</p>
                </div>
                <div className="category_img" onClick={() => navigate("/categories/dinner/1")}>
                    <span className="circle"></span>
                    <StaticImage src="../assets/Dinner.png" alt="Dinner category" placeholder="blurred" />
                    <p>Основные блюда</p>
                </div>
                <div className="category_img" onClick={() => navigate("/categories/snacks/1")}>
                    <span className="circle"></span>
                    <StaticImage src="../assets/Snack.png" alt="Snack category" placeholder="blurred" />
                    <p>Перекус</p>
                </div>
            </div>
        </section>
    )
}

export default Category
