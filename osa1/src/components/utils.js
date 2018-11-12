import React from 'react'

const Display = ({ text }) => text

const Otsikko = ({ text }) => {
    return (
        <h1>{text}</h1>
    )
}

export {Display, Otsikko}