import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'

const CONTENT_TAGNAME = 'content'
const NAV_TAGNAME = 'nav'

const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 64px;
    grid-template-areas: '${CONTENT_TAGNAME}' '${NAV_TAGNAME}';

    min-height: 100vh;

    @media only screen and (min-width: 768px) {
        grid-template-areas: '${NAV_TAGNAME} ${CONTENT_TAGNAME}';
        grid-template-columns: 64px 1fr;
        grid-template-rows: 1fr;
    }
`

const ContentWrapper = styled.section`
    background-color: #eaeaea;
    grid-area: ${CONTENT_TAGNAME};
`

const NavWrapper = styled.aside`
    grid-area: ${NAV_TAGNAME};
`

const MainLayout = ({ content: Content, nav: Nav }) => {
    return (
        <Router>
            <Main>
                <ContentWrapper>
                    <Content />
                </ContentWrapper>
                <NavWrapper>
                    <Nav />
                </NavWrapper>
            </Main>
        </Router>
    )
}

MainLayout.propTypes = {
    nav: PropTypes.elementType,
    content: PropTypes.elementType,
}

export default MainLayout
