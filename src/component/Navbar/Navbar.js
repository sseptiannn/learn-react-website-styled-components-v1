import React from 'react'

const Nav = styled.nav`
background: #101522;
height: 80px;
display :flex;
justify-content: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
`

const Navbar = () => {
    return (
        <>
            <Nav></Nav>
        </>
    )
}

export default Navbar
