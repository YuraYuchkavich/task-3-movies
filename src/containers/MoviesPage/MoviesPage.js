import React, { useEffect, useState, useCallback } from 'react';
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

    const  filter = useCallback((value) => {
       [...getMockMovies].filter( i => i.genre.includes(value))
        if (value == 'ALL') {
            return setMovies([...getMockMovies])
        }
        setMovies([...getMockMovies].filter( i => i.genre.includes(value)))
    }, [] )

    const  sorted = useCallback((value) => {
        const result = movies.sort(function(a, b) {
            var nameA = a[value]
            var nameB = b[value] 
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
          })
         setMovies([...result])
     }, [movies] )

    return (
        <Wrapper>
            <div className = 'control-pane-movies'>
                <MoviesFilter filter={filter}></MoviesFilter>
                <SortMovies sorted={sorted}></SortMovies>
            </div>
            <ListMovies movies = {movies}></ListMovies>
        </Wrapper>
    )
}

export default MoviesPage
