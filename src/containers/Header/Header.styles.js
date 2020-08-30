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

export const SearchBlock = styled.div`
    min-height:200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;


    .search-button {
        color: #ffffff;
        background-color: #f65261;
        height: 2.6em;
        width: 10em;
        border: none;
        border-radius: 0.25em;
        outline: none;
        border: none;
        font-size: 2em;
        color: #ffffff;
        margin-left: 0.25em;
    }

    .search-input {
        height: 2.5em;
        width: 30em;
        border: none;
        border-radius: 0.25em;
        background: linear-gradient(to right,rgb(139 145 147 / 50%),rgb(139 145 147 / 50%));
        font-size: 2em;
        outline: none;
        border: none;
    }
`