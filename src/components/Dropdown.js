import React, { useState } from 'react'
import { navigate } from 'gatsby'
import NextArrow from "../assets/next.svg"

const Dropdown = ({ title, items = [], category_title }) => {
    const [open, setOpen] = useState(false)
    const [selection, setSelection] = useState([])
    const toggle = () => {
        let drop_down = document.querySelector('.dd-list')
        let recipe_nav = document.querySelector('.recipes_navigation')
        let item_html = document.querySelectorAll('.dd-list__item')
        if (!open) {
            drop_down.classList.remove('animate_0')
            drop_down.classList.add('animate_1')
            recipe_nav.style.marginBottom = "0px"
            item_html.forEach(item => {
                item.style.display = "block"
            })
        } else {
            drop_down.classList.remove('animate_1')
            drop_down.classList.add('animate_0')
            recipe_nav.style.marginBottom = "-12.5rem"
            item_html.forEach(item => {
                item.style.display = "none"
            })
        }

        setOpen(!open)

    }
    const handleOnClick = (item) => {
        let drop_down = document.querySelector('.dd-list')
        if (!selection.some(current => current.id == item.id)) {
            setSelection([item])
            drop_down.classList.remove('animate_1')
            drop_down.classList.add('animate_0')
            if (item.id === 1) {
                navigate("/recipes")
                title = item.value
            }
            else if (item.id === 2) {
                navigate("/categories/dinner")
                title = item.value
            } else if (item.id === 3) {
                navigate("/categories/snacks")
                title = item.value
            } else if (item.id === 4) {
                navigate("/categories/breakfast")
                title = item.value
            }
            setOpen(!open)
        } else {
            let selectionAfterRemoval = selection
            selectionAfterRemoval.filter(
                current => current.id !== item.id
            )
            setSelection([...selectionAfterRemoval])
        }
        return title
    }

    const itemSelectedCheck = (item) => {
        if (selection.find(current => current.id === item.id)) {
            return true
        }
        return false
    }
    return (
        <div className="dd-wrapper">
            <div
                tabIndex={0}
                className="dd-header"
                role="button"
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}>
                <div className="dd-header__title">
                    <p className="dd-header__title--bold">{category_title ? category_title : title}</p>
                </div>
                <div className="dd-header__action">
                    <NextArrow className={`recipes_svg ${open ? 'arrow_up' : ''}`} />
                </div>
            </div>
            <ul className="dd-list">
                {items.map(item => {
                    return (
                        <li className="dd-list__item" key={item.id}>
                            <button type="button"
                                onClick={() => handleOnClick(item)}
                                className={itemSelectedCheck(item) ? 'btn_selected' : 'btn_not_selected'}>
                                <span>{item.value}</span>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Dropdown
