import React from 'react';
import { Wrapper, Image, MovieDetailsBlock, LogoBlock, DescriptionMovie } from './MovieDetails.styles'
import Button from '../../components/Button'
import Text from '../../components/Text'
import noImage from './not-found.png'

const MovieDetails = (props) => {
    return (
        <Wrapper>
            <LogoBlock>
                <div className='logo'>
                    <Text className={'logo-text-bold'}>
                        netflix
                    </Text>
                    <Text>
                        roulette
                    </Text>
                </div>
                <Button className={'add-movie-button'} onClick ={props.closeDetailsMovie}>
                    {'<='}
                </Button>
            </LogoBlock>
            <MovieDetailsBlock>
                <Image  
                    alt = 'test'
                    src={props.movieDetails.image || noImage}
                />
                <DescriptionMovie>
                    <div className='name'>
                        <div>{props.movieDetails.name}</div>
                        <div class="round">{props.movieDetails.rating}</div>
                    </div>
                    <div className='genre'>
                        {props.movieDetails.genre}
                    </div>
                    <div className='year-duration'>
                        {props.movieDetails.releaseDate}
                    </div>
                    <div class='description'>
                        {props.movieDetails.description}
                    </div>
                </DescriptionMovie>
            </MovieDetailsBlock>
        </Wrapper>
    )
}

export default MovieDetails
