import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Error = () => {
    return (
        <>
            <main className="error-page">
                <div className="description">
                    <h1>Страница не найдена</h1>
                    <h2>Запрашиваемая Вами страница  <br /> находится на интервальном голодании</h2>
                    <Link to="/" className="btn">назад</Link>
                </div>
                <div className="error-container">
                    <StaticImage src="../assets/404.png" alt="404 image" placeholder="blurred" />
                </div>
            </main>
        </>
    )
}

export default Error
