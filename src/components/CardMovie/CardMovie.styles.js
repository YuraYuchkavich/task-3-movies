import styled from 'styled-components'

export const Wrapper = styled.div`
    background: #232323;
    height: 450px;
    width: 300px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 90% 10%;
    padding: 20px; 
`

export const Description = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 60% 40%;
    color: #ffffff;

    .main-information {
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .name-movie {
        font-size: 14px;
    }

    .release-date{
        font-size: 10px;
        border: 1px solid #ffffff;
        border-radius: 3px;
        padding: 3px 10px;
        padding-top: 0.6em;
    }

    .genres-movie {
        font-size: 10px;
    }
`

export const Image = styled.img`
    background: #232323;
    width: 100%;
    height: 100%;
`