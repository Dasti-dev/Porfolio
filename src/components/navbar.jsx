import React from 'react'
import './navbar.css'

const navoptns = [
    {
        name : "About",
        link : "www.google.com",
    },
    {
        name : "Projects",
        link : "www.google.com",
    },
]

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <b>Astitwa</b>Dwivedi<b>.</b>
      </div>
      <div className="optns">
        {navoptns.map((item)=><li className="navlist">{item.name}</li>)}
      </div>
    </div>
  )
}

export default Navbar;
