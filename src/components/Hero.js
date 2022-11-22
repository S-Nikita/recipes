import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
    return (
        <section className="hero">
            <article className="hero-main">
                <h1>Пример заголовка</h1>
                <h2>Пример подзаголовка</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis vel facilisis morbi.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis vel facilisis morbi.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis vel facilisis morbi.
                </p>
                <a href="#category_id" className="btn">Вперед</a>
            </article>
            <div className="hero_images">
                <StaticImage
                    src="../assets/blob4_hero.png"
                    alt="Banana meal"
                    placeholder="blurred"
                    className="img_hero"
                />
            </div>
        </section>
    )
}

export default Hero
