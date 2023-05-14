import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import SEO from "../components/Seo"

const Error = () => {
    return (
        <>
            <SEO title="404"/>
            <main className="error-page">
                <div className="error-wrapper">
                    <div className="description">
                        <h1>Страница не найдена</h1>
                        <h2>Запрашиваемая Вами страница  <br /> находится на интервальном голодании</h2>
                        <Link to="/" className="btn btn-error">назад</Link>
                    </div>
                    <div className="error-container">
                        <StaticImage src="../assets/404.svg" alt="404 image" placeholder="blurred" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Error
