import styled from 'styled-components'

export const Wrapper = styled.div`
    background: #232323;
    height: 450px;
    width: 300px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 90% 10%;
    padding: 20px; 

    .change-movie {
        display: block; 
        position: relative;
    }

    .mask { 
        position: absolute;
        top: 1em;
        left: 25em;
        right: 0;
        bottom: 0;
        opacity: 0;
        width: 3em;
        height: 3em;
        border: 2px solid #232323;
        border-radius: 50%;
        overflow: hidden;
        background: #232323;
    }

    .change-movie:hover {
        .mask { 
            opacity: 1;
        }

    }

    .mask-menu { 
        position: absolute;
        top: 1em;
        left: 14em;
        right: 0;
        bottom: 0;
        opacity: 1;
        width: 15em;
        height: 8em;
        background: #232323;
    }

    .close {
        display: flex;
        justify-content: flex-end;
        font-size: 2em;
        color: white;
        margin-right: 0.25em;
    }
        
    .close:hover,
    .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }

    .item-menu {
        color: #ffffff;
        font-size:15px;
        margin-left:1em;
    }

    .item-menu:hover{
        background: #F65261;
    }

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