import React from 'react'
import logo from './../Images/logo-mastercraft.svg'
import bookmark from './../Images/icon-bookmark.svg'
const Mastercraft = () => {
    return (
        <div className="mastercraft">
            <img src={logo} alt="" className="master-logo"/>
            <div className="mastercraft-header">
                
                <h4>Mastercraft Bamboo Monitor Riser</h4>
                <p>A beautiful and handcrafted monitor stand to reduce neck and eye strain</p>
            </div>
            <div className="master-btn-container">
                <button className="btn-primary">Back this project</button>
                <button className="btn-secondary"><img src={bookmark} alt="" /></button>
            </div>
        </div>
    )
}

export default Mastercraft
