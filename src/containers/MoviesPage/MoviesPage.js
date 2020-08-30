import React, { useEffect, useState} from 'react';
import { Wrapper } from './MoviesPage.styles'
import ListMovies from '../ListMovies'
import { getMockMovies } from '../../mockData/mockData'
import MoviesFilter from '../MoviesFilter'
import SortMovies from '../SortMovies'

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies([...getMockMovies])
    }, []);

    return (
        <Wrapper>
            <div className = 'control-pane-movies'>
                <MoviesFilter></MoviesFilter>
                <SortMovies></SortMovies>
            </div>
            <ListMovies movies = {movies}></ListMovies>
        </Wrapper>
    )
}

export default MoviesPage
