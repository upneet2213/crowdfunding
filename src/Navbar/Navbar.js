import React from 'react'
import Logo from './Logo'
import NavButton from './NavButton'
import Navlinks from './Navlinks'

const Navbar = ({openModal}) => {
    return (
        <nav>
            <div className="logo">
                <Logo/>
            </div>
            <div className="nav-links">
            <Navlinks/>
            </div>
            <div className="nav-btn">
                <NavButton openModal={openModal}/>
            </div>
        </nav>
    )
}

export default Navbar
