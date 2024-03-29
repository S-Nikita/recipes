import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import TransitionLink from 'gatsby-plugin-transition-link'


const Project = () => {
    return (
        <section className="project">
            <div className="project-body">
                <div className="picture">
                    <div className="about-img">
                        <StaticImage src="../assets/dessert.png" alt="donuts" placeholder="blurred" />
                    </div>
                    <div className="shape">
                        <img />
                    </div>
                </div>
                <article className="project-description">
                    <h2>О проекте</h2>
                    <div className="description_wrapper">
                        <div className="description__container">
                            <p>Добро пожаловать на сайт, где ты сможешь найти множество вкусных рецептов низкокалорийных блюд с высоким содержанием белка. Являющихся аналогами всеми любимых кулинарных произведений. </p>
                            <p>Задача проекта – сломать стереотип о том,  что “курица, брокколи и рис” это рецепт успеха, когда речь заходит о похудении и поддержании спортивной формы. </p>
                            <p>Какой бы не была твоя цель: пляжная фигура, похудение, поддержание и набор мышечной массы или здоровое питание. Не обязательно полностью отказываться от любимой еды, чтобы достичь желаемого результата.</p>
                        </div>
                        <TransitionLink to="/about" className="btn project-descr--btn" >подробнее</TransitionLink>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Project
