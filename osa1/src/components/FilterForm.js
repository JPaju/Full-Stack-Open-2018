import React from 'react'

const FilterForm = ({ onChangeCallback }) => {

    const onChange = (event) => {
        onChangeCallback(event.target.value)
    }

    return (
        <input
            onChange={onChange}
            placeholder='Rajaa näytettäviä' />
    )

}

export default FilterForm