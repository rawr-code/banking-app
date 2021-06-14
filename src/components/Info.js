import styled from 'styled-components'

export default styled.div`
    & > * {
        margin: 0;
    }
    & > :first-child {
        color: black;
        font-size: 13px;
        margin-bottom: 4px;
        font-weight: bold;
        text-transform: uppercase;
    }
    & > :last-child {
        color: gray;
        font-size: 10px;
    }
`