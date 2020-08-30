import React from 'react'
import PropTypes from 'prop-types'

const Input = (props) => { 
    return (
        <input className={props.className} placeholder={props.placeholder}>
            {props.children}
        </input>
    )
}

Input.propTypes = {
    className: PropTypes.string,
    children: PropTypes.element,
    placeholder: PropTypes.string
}

export default Input