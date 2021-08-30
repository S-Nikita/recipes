import React from "react";
import { Link } from "gatsby";

const data = [
    {
        id: 1,
        text: "Главная",
        url: "/"
    },
    {
        id: 2,
        text: "Рецепты",
        url: "/recipes"
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
        <Link to={link.url} key={link.id}>{link.text}</Link>
    )
})

export default ({ styleClass }) => {
    return (
        <div className={styleClass}>
            {tempLinks}
        </div>
    )
}