import styled from 'styled-components'

const TableBase = styled.div`
    background-color: #eaeaea;
    padding: 0 1rem;
    padding-top: 0;
`

export const Table = styled(TableBase)`
    grid-area: table;
    height: calc(100vh - 64px);
    overflow: auto;

    @media only screen and (min-width: 768px) {
        height: 100vh;
    }
`

export const TableItem = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 40px 2fr 1fr;
    align-items: center;

    background-color: #ffffff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    padding: 10px 12px;

    margin-bottom: 10px;

    & > :last-child {
        & > * {
            text-align: right;
        }
    }
`