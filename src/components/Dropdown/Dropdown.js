import React from 'react'
import PropTypes from 'prop-types'

const Dropdown = (props) => {
    
    return (
        <select className={props.className}>
            {props.values.map((value) => (
                <option key={value} value={value}>
                    {value}
                </option>
            ))}
        </select>
    )
}

Dropdown.propTypes = {
    className: PropTypes.string,
    value: PropTypes.arrayOf(PropTypes.string)
}

export default Dropdown