import React,{ useState, useEffect } from 'react'
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
  const [scrolling, setScrolling] = useState(false);
  const [logo, setLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    const handleScrollLogo = () => {
      if (window.scrollY > (window.innerHeight -55) && window.scrollY < (2 * window.innerHeight - 55)) {
        setLogo(true);
      } else {
        setLogo(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollLogo);
    return () => {
      window.removeEventListener('scroll', handleScrollLogo);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <div className={`nav ${scrolling ? 'scrolling' : ''}`}>
      <div className={`logo ${logo ? 'varCol' : ''}`}>
        <b>Astitwa</b>Dwivedi<b>.</b>
      </div>
      <div className="optns">
        {navoptns.map((item)=><li className="navlist">{item.name}</li>)}
      </div>
    </div>
  )
}

export default Navbar;
