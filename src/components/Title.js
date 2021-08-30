import React from 'react'

const Title = ({title}) => {
    return (
        <h2>{title || "missing title"}</h2>
    )
}

export default Title
