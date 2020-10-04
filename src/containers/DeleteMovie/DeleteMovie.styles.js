import styled from 'styled-components'

export const Wrapper = styled.div`
    display: display; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow-y: scroll;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

export const ModalContent = styled.div`
    position: relative;
    background-color: #424242;
    margin: auto;
    padding: 10px;
    width: 500px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s;
    

    .title-header {
        display: flex;
        justify-content: flex-start;
        font-size: 3em;
        color: white;
        margin-left: 50px;
    }

    .close {
        display: flex;
        justify-content: flex-end;
        font-size: 3em;
        color: white;
        margin-right: 0.5em;
    }
        
    .close:hover,
    .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }

    .modal-body {
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 1fr;
        margin-left: 50px;
        margin-top: 50px;
        font-size: 15px;
        color: #FFFFFF;
    }
    
    .modal-footer {
        display: flex;
        justify-content: flex-end;
        margin: 20px 45px 20px 50px;
        background-color: #424242;
        color: white;

        .submit-button {
            height: 3em;
            width: 10em;
            margin-left: 10px;
            text-align: center;
            background: #F65261;
            border: none;
            font-weight: 500;
            text-transform: uppercase;
            color: #ffffff;
            border-radius: 0.25em;
        }

        .reset-button {
            height: 3em;
            width: 10em;
            text-align: center;
            background: #424242;
            border: 1px solid #F65261;
            font-weight: 500;
            text-transform: uppercase;
            color: #F65261;
            border-radius: 0.25em;
        }        
    }
`
