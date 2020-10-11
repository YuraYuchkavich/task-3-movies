import React, { useState, useCallback } from 'react'
import { Wrapper } from './Root.styles'
import Header from '../../containers/Header' 
import MoviesPage from '../../containers/MoviesPage'
import Footer from '../../containers/Footer'
import ErrorBoundary from '../ErrorBoundary'

const Root = () => {
    const [isMovieDetails, setIsMovieDetails] = useState(false)
    const [movieDetails, setMovieDetails] = useState({})
    const openMovieDetails = useCallback((movie) => {
        setMovieDetails(movie)
        setIsMovieDetails(true)
    }, [])
    
    const closeDetailsMovie = useCallback(() => {
        setIsMovieDetails(false)
    }, [])

    return (
        <ErrorBoundary>
            <Wrapper>
                <Header 
                    isMovieDetails={isMovieDetails} 
                    movieDetails={movieDetails} 
                    closeDetailsMovie={closeDetailsMovie}
                />
                <MoviesPage openMovieDetails={openMovieDetails}></MoviesPage>
                <Footer></Footer> 
            </Wrapper>
        </ErrorBoundary>
    )
}

export default Root
