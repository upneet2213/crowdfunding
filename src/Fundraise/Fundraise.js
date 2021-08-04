import React from 'react'
import About from './About'
import Donations from './Donations'
import Mastercraft from './Mastercraft'

const Fundraise = () => {
    return (
        <div className="section-center">
            
            <Mastercraft/>
            <Donations/>
            <About/>
        </div>
    )
}

export default Fundraise
