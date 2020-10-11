import styled from 'styled-components'
import BackgroundHeader from './black-movies-banner.jpg';

export const Wrapper = styled.div`
    color:red;
    background-image: linear-gradient(to top,rgb(11 12 12 / 90%),rgba(11 12 12 / 90%)),url(${BackgroundHeader});
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 30% 70%;
    
    margin-bottom: 1em;
`
export const LogoBlock = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;

    .add-movie-button {
        right: 0;
        margin-left: auto;
        height: 3em;
        width: 10em;
        text-align: center;
        margin-right: 3em;
        margin-top: 1em;
        background: linear-gradient(to right,rgb(139 145 147 / 50%),rgb(139 145 147 / 50%));
        border: none;
        font-weight: 700;
        text-transform: uppercase;
        color: #f65261;
        border-radius: 0.25em;
    }

    .logo {
        display: flex;
        flex-direction: row;
        font-size: 20px;
        color: #f65261;
        margin-left: 3em;

    }

    .logo-text-bold {
       font-weight: bold;
    } 
`

export const MovieDetailsBlock = styled.div`
    min-height:300px;
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 100%;
`

export const Image = styled.img`
    margin-left: 6em;
    background: #232323;
    width: 200px;
    height: 250px;
`

export const DescriptionMovie = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 15% 15% 15% 55%;
    color: #ffffff;

    .name {
        display: flex;
        flex-direction: row;
        font-size: 30px;
    }

    .genre {
        font-size: 20px;
    }

    .year-duration {
        font-size: 15px;
        color: #F65261;
    }

    .description {
        font-size: 10px;
    }

    .round {
        width: 30px;
        height: 30px;
        border: 2px solid #ffffff;
        border-radius: 50%;
        line-height: 30px;  
        font-size: 15px;
        text-align: center;
        margin-left: 10px;
        color: #ffffff
`

