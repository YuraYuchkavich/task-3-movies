import styled from 'styled-components'

export const Wrapper = styled.div`
    background: #232323;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 2em;

    .button-filter {
        color: #ffffff;
        font-size: 14px;
        border: none;
        background-image: none; 
        background: transparent;
        float: left;
        background-color: transparent;

        &: hover {
            color: #f65261;
            border: none;
        }
    }
`
