// import Navbar from "./Navbar/Navbar";
import React from "react";
import Fundraise from "./Fundraise/Fundraise";
import Hero from "./Hero";
import NavbarModal from "./Navbar/NavbarModal";

function App() {
  const [isModalOpen,setIsModalOpen]=React.useState(false)
  const openModal=()=>{
    setIsModalOpen(true)

  }
  const closeModal=()=>{
    setIsModalOpen(false)
  }
  const displayModal=()=>{
    if(isModalOpen){
      document.querySelector('.nav-modal').style.display="block"
      document.querySelector('.nav-modal-overlay').style.display="block"
    }
    else{
      document.querySelector('.nav-modal').style.display="none"
      document.querySelector('.nav-modal-overlay').style.display="none"
    }
    // console.log(document.querySelector('.nav-modal').style)
  }
  displayModal()
  return (
    <main>
      <Hero openModal={openModal}/>
      <Fundraise/>
      <NavbarModal closeModal={closeModal}/>
    </main>
  )
}

export default App;
