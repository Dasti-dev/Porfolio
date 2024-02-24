import React,{ useState, useEffect } from 'react'
import './navbar.css'

const navoptns = [
    {
        name : "About",
        link : "#about",
    },
    {   
        name : "Projects",
        link : "#timeline",
    },
]

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [logo, setLogo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // const handleResize = () => {
    //   setIsSmallScreen(window.innerWidth <= 768);
    // };

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

  const handleNavOptionClick = (link) => {
    if (link.startsWith("#")) {
      const targetElement = document.querySelector(link);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      }
    }
  };
  
  return (
    <div className={`nav ${scrolling ? 'scrolling' : ''}`}>
      <div className={`logo ${logo ? 'varCol' : ''}`}>
        <b>Astitwa</b>Dwivedi<b>.</b>
      </div>
      
      <div className="optns">
        {navoptns.map((item)=><li  className="navlist" onClick={() => handleNavOptionClick(item.link)}>{item.name}</li>)}
      </div>
    </div>
  )
}

export default Navbar;
