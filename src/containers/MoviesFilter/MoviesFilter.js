import React from 'react';
import { Wrapper } from './MoviesFilter.styles'
import Button from '../../components/Button'

const filters = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME']

const MoviesFilter = (props) => {
    
    const filtredMovie = (e) => {
        props.filter(e.currentTarget.innerText);
    }

    return (
        <Wrapper>
           {
               filters.map((item) => 
                <Button  key={item} className={'button-filter'} onClick={filtredMovie}>
                    {item}
                </Button>
               )
           }
        </Wrapper>
    )
}

export default MoviesFilter
