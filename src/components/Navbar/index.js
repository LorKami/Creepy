import React from 'react'
import "../Navbar/Navbar.css"

import Logo from "../../images/Logo.png"

const Navbar = () => {
  return (
    <div>
      
    <div className='NavbarSection'>
      <div className='NavbarLogoImage'>
        {/* <img src={Aptos}></img> */}
      </div>
      <div className='NavbarLogoText'>
      <img src={Logo}></img>
      </div>
    </div>

    </div>
  )
}

export default Navbar