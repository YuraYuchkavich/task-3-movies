import styled from 'styled-components'

export const Wrapper = styled.div`
    position: fixed;
    z-index: 101;
    background: $black;
    box-shadow: 0 0 20px rgba(0, 0, 0, .3),
    0 0 10px rgba(0, 0, 0, .3);
    width: 600px;
    min-height: 230px;
    top: 10%;
    left: calc((100vw - 600px) / 2);
`
