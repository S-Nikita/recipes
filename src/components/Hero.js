import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
    return (
        <section className="hero">
            <article className="hero-main">
                <h1>Пример заголовка</h1>
                <h2>Пример подзаголовка</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis vel facilisis morbi.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis vel facilisis morbi.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis vel facilisis morbi.
                </p>
                <Link to="/about" className="btn">Вперед</Link>
            </article>
            <div className="hero_images">
                <StaticImage
                    src="../assets/hero_left.png"
                    alt="Waffles on a white plate"
                    placeholder="blurred"
                    className="img_left"
                />
                <StaticImage
                    src="../assets/hero_right.png"
                    alt="Healty food on a white plate"
                    placeholder="blurred"
                    className="img_right"
                />
            </div>
        </section>
    )
}

export default Hero
