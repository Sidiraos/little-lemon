import React from 'react'

function HamburgerMenu({handleClick , active}) {
const activeClass = active ? 'active' : '';
console.log('je suis rendu')
  return (
    <div onClick={handleClick} className={`nav-btn ${activeClass}`}>
      <span className={`nav-icon ${activeClass}`}></span>
    </div>
  )
}

export default HamburgerMenu;