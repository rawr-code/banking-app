import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IoQrCodeOutline, IoTrophyOutline } from 'react-icons/io5'

const HeaderWrapper = styled.header`
    background-color: #eaeaea;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0.5rem;
`
const HeaderTitle = styled.h1`
    /* reset */
    margin: 0;
    font-size: 1.5rem;
    /* --- */
`
const HeaderActions = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 1rem;
`

const Body = styled.div`
    background-color: #eaeaea;
    padding: 0 1rem;
    padding-top: 0;

    grid-area: table;
    height: calc(100vh - 64px);
    overflow: auto;

    @media only screen and (min-width: 768px) {
        height: 100vh;
    }
`

const Page = ({ title, children }) => {
    return (
        <>
            <Body>
                <HeaderWrapper>
                    <HeaderTitle>{title}</HeaderTitle>
                    <HeaderActions>
                        <IoQrCodeOutline size={24} color="#070707" />
                        <IoTrophyOutline size={24} color="#070707" />
                    </HeaderActions>
                </HeaderWrapper>
                {children}
            </Body>
        </>
    )
}

Page.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
}

export default Page
