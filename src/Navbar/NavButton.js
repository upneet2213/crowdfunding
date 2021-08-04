import navbtn from '../Images/icon-hamburger.svg'

import React from 'react'

const NavButton = ({openModal}) => {
    return (
        <div>
            <button onClick={openModal} className="nav-btn"><img src={navbtn} alt="" /></button>
        </div>
    )
}

export default NavButton
