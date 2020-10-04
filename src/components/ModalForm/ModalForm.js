import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './ListMovies.style'

const ModalForm = (props) => {
    
    return (
        <Wrapper className={props.className}>
            {props.children}
        </Wrapper>
    )
}

/*Text.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.string)
    ])
}*/

export default ModalForm