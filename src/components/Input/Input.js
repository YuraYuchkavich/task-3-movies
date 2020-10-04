import React from 'react'
import PropTypes from 'prop-types'

const Input = (props) => { 
    return (
        <input 
            className={props.className}
            placeholder={props.placeholder}
            type={props.type}
        >
            {props.children}
        </input>
    )
}

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.element,
    placeholder: PropTypes.string
}

export default Input