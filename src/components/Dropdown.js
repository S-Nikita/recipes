import React, { useState } from 'react'
import NextArrow from "../assets/next.svg"

const Dropdown = ({ title, items = [], multiselect = false }) => {
    const [open, setOpen] = useState(false)
    const [selection, setSelection] = useState([])
    async function toggle() {
        let drop_down = document.querySelector('.dd-list')
        if (!open) {
            drop_down.classList.remove('animate_0')
            drop_down.classList.add('animate_1')
        } else {
            drop_down.classList.remove('animate_1')
            drop_down.classList.add('animate_0')
        }

        let promise = new Promise((resolve, reject) => {
            resolve(setOpen(!open))
        })
        await promise
        if (!open && selection.length == 0) {
            let all_categories = document.querySelector('.dd-list__item').firstChild
            all_categories.classList.remove('btn_not_selected')
            all_categories.classList.add('btn_selected')
        }

    }
    const handleOnClick = (item) => {
        let list_title = document.querySelector('.dd-header__title--bold')
        let all_categories = document.querySelector('.dd-list__item').firstChild
        let drop_down = document.querySelector('.dd-list')
        if (!selection.some(current => current.id == item.id)) {
            if (!multiselect) {
                setSelection([item])
                all_categories.classList.remove('btn_selected')
                all_categories.classList.add('btn_not_selected')
                list_title.innerText = item.value
                drop_down.classList.remove('animate_1')
                drop_down.classList.add('animate_0')
                setOpen(!open)
            } else if (multiselect) {
                setSelection([...selection, item])
            }
        } else {
            let selectionAfterRemoval = selection
            selectionAfterRemoval.filter(
                current => current.id !== item.id
            )
            setSelection([...selectionAfterRemoval])
        }
    }

    const itemSelectedCheck = (item) => {
        if (selection.find(current => current.id == item.id)) {
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
                    <p className="dd-header__title--bold">{title}</p>
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
