import styled from 'styled-components'

const InfoCard = styled.div`
    & > * {
        margin: 0;
    }

    & > h2 {
        text-align: center;
        text-transform: uppercase;
        border-bottom: 1px dashed gray;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;

        & > p {
            font-size: 1rem;
            color: gray;
            font-weight: 400;
            margin-bottom: 8px;
            margin: 0;
        }
    }

    & > h3 {
        font-size: 1rem;
    }

    & > p {
        font-size: 1rem;
        color: gray;
        font-weight: 400;
        margin-bottom: 8px;
    }
`

export default InfoCard
