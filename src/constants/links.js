import React from "react";
import TransitionLink from 'gatsby-plugin-transition-link';

const data = [
    {
        id: 1,
        text: "Главная",
        url: "/home"
    },
    {
        id: 2,
        text: "Рецепты",
        url: "/recipes/1"
    },
    {
        id: 3,
        text: "О проекте",
        url: "/about"
    },
    {
        id: 4,
        text: "Контакты",
        url: "/contact"
    },
]

const tempLinks = data.map(link => {
    return (
        <TransitionLink
            to={link.url}
            key={link.id}>
            {link.text}
        </TransitionLink>
    )
})

export default ({ styleClass }) => {
    return (
        <div className={styleClass}>
            {tempLinks}
        </div>
    )
}