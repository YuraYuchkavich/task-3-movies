import React from 'react'
import { Wrapper } from './Root.styles'
import Header from '../../containers/Header' 
import MoviesPage from '../../containers/MoviesPage'
import Footer from '../../containers/Footer'
import ErrorBoundary from '../ErrorBoundary'

const Root = () => {

    return (
        <ErrorBoundary>
            <Wrapper>
                <Header></Header>
                <MoviesPage></MoviesPage>
                <Footer></Footer> 
            </Wrapper>
        </ErrorBoundary>
    )
}

export default Root
