import React from 'react';
import { Wrapper } from './SortMovies.styles'
import Text from '../../components/Text'
import Dropdown from '../../components/Dropdown'

const sort =  ['RELEASE DATE', 'NAME', 'GENRE']

const SortMovies = (props) => {

    const sortedMovie = (e) => {
        props.sorted(e.currentTarget[e.currentTarget.options.selectedIndex].innerText.toLowerCase())
    }
    return (
        <Wrapper>
            <Text className='sort-movies'>
                SORT BY
            </Text>
            <Dropdown className='sort-dropdown' values={sort} select={sortedMovie}/>
        </Wrapper>
    )
}

export default SortMovies
