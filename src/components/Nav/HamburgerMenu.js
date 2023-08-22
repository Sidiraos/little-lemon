import React from 'react'

const HamburgerMenu = React.forwardRef(({handleClick}, ref)=>{
  console.log('hamburger menu is rendered')
  return (
    <div ref={ref} onClick={handleClick} className={`nav-btn`}>
      <span className={`nav-icon`}></span>
    </div>
  )
}) ;

export default HamburgerMenu;