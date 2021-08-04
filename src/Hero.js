import React from 'react'
import Navbar from './Navbar/Navbar'
import NavbarModal from './Navbar/NavbarModal'

const Hero = ({openModal}) => {
    return (
        <div className="hero">
            <div className="nav">
                <Navbar openModal={openModal}/>
                {/* <NavbarModal/> */}
            </div>
        </div>
    )
}

export default Hero
