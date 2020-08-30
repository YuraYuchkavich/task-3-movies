import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    
    return (
        <button className={props.className}>
            {props.children}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string,
}
  
export default Button