import React from 'react';
import { Wrapper } from './MoviesFilter.styles'
import Button from '../../components/Button'

const filters = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME']

const MoviesFilter = () => {

    return (
        <Wrapper>
           {
               filters.map((item) => 
                <Button  key={item} className={'button-filter'}>
                    {item}
                </Button>
               )
           }
        </Wrapper>
    )
}

export default MoviesFilter
