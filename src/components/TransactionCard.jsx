import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Utils
import { formatDate } from '../utils/date'

const AVATAR_TAG = 'avatar'
const TITLE_TAG = 'title'
const DESCRIPTION_TAG = 'description'
const AMOUNT_TAG = 'amount'
const DATE_TAG = 'date'

const Base = styled.div`
    display: grid;
    grid-column-gap: 12px;
    grid-template-areas:
        '${AVATAR_TAG} ${TITLE_TAG} ${AMOUNT_TAG}'
        '${AVATAR_TAG} ${DESCRIPTION_TAG} ${DATE_TAG}';
    grid-template-columns: 40px 1fr 1fr;
    grid-template-rows: repeat(2, 20px);
    align-items: center;

    background-color: #ffffff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    padding: 10px 12px;

    & > :last-child {
        & > * {
            text-align: right;
        }
    }
`

const IconWrapper = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: ${({ bg }) => bg};
    display: flex;
    justify-content: center;
    align-items: center;

    grid-area: ${AVATAR_TAG};
`

const Avatar = styled.img`
    width: 100%;
    height: 100%;
`

const Text = styled.p`
    margin: 0;
`

const Title = styled(Text)`
    grid-area: ${TITLE_TAG};
    color: #070707;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
`

const Description = styled(Text)`
    grid-area: ${DESCRIPTION_TAG};
    color: gray;
    font-size: 10px;
`

const Amount = styled(Text)`
    grid-area: ${AMOUNT_TAG};
    text-align: right;
    font-weight: bold;
    color: #070707;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
`

const DateTime = styled(Text)`
    grid-area: ${DATE_TAG};
    text-align: right;
    color: gray;
    font-size: 10px;
`

const TransactionCard = forwardRef(
    (
        { avatar, icon: Icon, title, description, amount, date, onClick },
        ref
    ) => (
        <Base ref={ref} onClick={onClick}>
            <IconWrapper bg={avatar ? 'transparent' : '#070707'}>
                {avatar && <Avatar src={avatar} />}
                {Icon && <Icon size={24} color="white" />}
            </IconWrapper>
            <Title>{title}</Title>
            <Amount>{amount}</Amount>
            <Description>{description}</Description>
            <DateTime>{formatDate(date)}</DateTime>
        </Base>
    )
)

TransactionCard.propTypes = {
    avatar: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    amount: PropTypes.string,
    date: PropTypes.string,
    Icon: PropTypes.elementType,
    onClick: PropTypes.func,
}

export default TransactionCard
