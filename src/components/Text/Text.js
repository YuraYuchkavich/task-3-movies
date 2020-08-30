import React from 'react'
import PropTypes from 'prop-types'

const Text = (props) => {
    
    return (
        <p className={props.className}>
            {props.children}
        </p>
    )
}

Text.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.string)
    ])
}

export default Text