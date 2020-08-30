import React from 'react'
import Text from '../../components/Text'
import { Wrapper, Image, Description } from './CardMovie.styles'
import noImage from './not-found.png'
import PropTypes from 'prop-types'

const CardMovie = (props) => {

    return (
        <Wrapper>
            <Image  
                alt = 'test'
                src={props.movie.image || noImage}
             ></Image>
            <Description>
                <div className = 'main-information'>
                <Text className={'name-movie'}>{props.movie.name}</Text>
                <Text className={'release-date'}>{props.movie.releaseDate}</Text>
                </div>
                <Text className={'genres-movie'}>{props.movie.genre}</Text>
            </Description>
        </Wrapper>
    )
}

CardMovie.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    releaseDate: PropTypes.number,
    genre: PropTypes.arrayOf(PropTypes.string)
}

export default CardMovie