import React from 'react'
import logo from './../../assets/logo_cpx_web2_1000.png'
import './Navbar.css'

function Navbar() {
  return (
    <div className='barra'>
      <img id="logo" src={logo} />
      <a href="https://www.capittalx.com">Conheca a CapittalX</a>
    </div >
  )
}

export default Navbar