import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-wrapper">
                <article className="hero-main">
                    <h1>Shred Kitch<span>en</span></h1>
                    <h2><span>Фигура мечты</span> <br />
                        без отказа от любимых блюд
                    </h2>
                    <p>
                        Рецепты, которые докажут тебе, что спортивное питание не обязано быть скучным, 
                        а процесс похудения мучительным
                    </p>
                    <AnchorLink to="/#category_id" className="btn btn-hero">Вперед</AnchorLink>
                </article>
                <div className="hero_pancakes">
                    <StaticImage
                        src="../assets/pancakes.png"
                        alt="Banana meal"
                        placeholder="blurred"
                        className="img_hero"
                        objectFit="cover"
                    />
                </div>
                <div className="hero_toast">
                    <StaticImage
                    src="../assets/frenchtoast.png"
                    alt="Banana meal"
                    placeholder="blurred"
                    className="img_hero"
                    />
                </div>
                <div className="hero_icecream">
                    <StaticImage
                    src="../assets/icecream.png"
                    alt="Banana meal"
                    placeholder="blurred"
                    className="img_hero"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
