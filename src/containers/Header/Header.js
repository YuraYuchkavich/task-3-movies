import React, { useState } from 'react';
import { Wrapper, SearchBlock, LogoBlock } from './Header.styles'
import Button from '../../components/Button'
import Text from '../../components/Text'
import Input from '../../components/Input'
import AddMovie from '../AddMovie'
import MovieDetails from '../MovieDetails'

const Header = ({isMovieDetails, movieDetails, closeDetailsMovie}) => {
const [isAddFilmModal, setAddModalOpen] = useState(false)

const onAddMovie = () => {
    setAddModalOpen(true);
}

const closeAddMovie = () => {
    if (isAddFilmModal) {
        setAddModalOpen(false) 
    }
    else {
        setAddModalOpen(true) 
    }
}
const renderMovieDetails = () => (
    <MovieDetails 
        movieDetails={movieDetails}
        closeDetailsMovie={closeDetailsMovie}
    />)

const renderMainHeader = () => {
    return (
        <>
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
                    <Button className={'add-movie-button'} onClick={onAddMovie}>
                        + ADD MOVIE
                    </Button>
                </LogoBlock>
                <SearchBlock>
                    <Input className={'search-input'} placeholder={'What do you want to watch?'}></Input>
                    <Button className={'search-button'}>
                        SEARCH
                    </Button>
                </SearchBlock>
            </Wrapper>
            {
            isAddFilmModal && <AddMovie closeModal={closeAddMovie}/>
            }
        </>
    )
}

const renderHeader = () =>
    {
        return isMovieDetails ? renderMovieDetails() : renderMainHeader()
    }
    return (
        renderHeader()
    )
}

export default Header
