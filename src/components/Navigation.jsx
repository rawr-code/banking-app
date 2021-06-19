import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
    background-color: #fff;
    grid-area: nav;

    @media only screen and (max-width: 768px) {
        display: flex;
    }
`
const NavItem = styled.button`
    /* reset */
    border: none;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
    /*  ----- */

    display: flex;
    align-items: center;
    justify-content: center;

    height: 64px;
    width: 100%;

    @media only screen and (min-width: 768px) {
        height: 56px;
    }

    cursor: pointer;
`

const Navigation = ({ router }) => {
    const history = useHistory()

    const handleClick = (url) => () => {
        history.push(url)
    }

    return (
        <Nav>
            {router.map((route) => (
                <NavItem key={route.title} onClick={handleClick(route.url)}>
                    <route.icon size={24} color="#070707" />
                </NavItem>
            ))}
        </Nav>
    )
}

Navigation.propTypes = {
    router: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            icon: PropTypes.elementType.isRequired,
            url: PropTypes.string.isRequired,
            page: PropTypes.elementType.isRequired,
            exact: PropTypes.bool.isRequired,
        })
    ),
}

export default Navigation
