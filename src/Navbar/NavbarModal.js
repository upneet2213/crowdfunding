import React from 'react'
import closebtn from './../Images/icon-close-modal.svg'
const NavbarModal = ({closeModal}) => {
    return (
        <>
        
        <div className="nav-modal">
        <button onClick={closeModal} className="modal-btn"><img src={closebtn} alt="" /></button>
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Discover</a></li>
                <li><a href="">Get Started</a></li>
            </ul>
            
        </div>
        <div className="nav-modal-overlay"></div>
        </>
    )
}

export default NavbarModal
