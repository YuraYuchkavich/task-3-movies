import React from 'react'
import { Wrapper } from './ListMovies.style'
import CardMovie from '../../components/CardMovie'
import Text from '../../components/Text'
import PropTypes from 'prop-types'

const ListMovies  = (props) => {

    return (
        <Wrapper>
            { props.movies.length == 0 ? 
                <Text className="noMovieFound" >
                    No Movie Found
                </Text> :
                props.movies.map((movie) => (
                    <CardMovie 
                        key={movie.name}
                        movie={movie} 
                        openMovieDetails={props.openMovieDetails}
                    />
                  ))
            }
        </Wrapper>
    )
}

ListMovies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ListMovies
