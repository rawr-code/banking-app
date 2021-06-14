import styled from 'styled-components'

export default styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 64px;
    grid-template-areas: 'table' 'nav';

    min-height: 100vh;

    @media only screen and (min-width: 768px) {
        grid-template-areas: 'nav table';
        grid-template-columns: 64px 1fr;
        grid-template-rows: 1fr;
    }
`