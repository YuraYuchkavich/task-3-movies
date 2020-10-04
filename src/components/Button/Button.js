import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    
    return (
        <button className={props.className} onClick = {props.onClick}>
            {props.children}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.string,
}
  
export default Button