import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

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
                <AnchorLink to="/#category_id" className="btn">Вперед</AnchorLink>
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
