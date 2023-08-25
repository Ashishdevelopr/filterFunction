import React from 'react'

const Navbar = ({setActiveCategory}) => {
  return (
    <div className='navbar'>
        {/* <button className='nav-item'>All Status</button> */}
        <button className='nav-item' onClick={()=>{setActiveCategory('old')}}>Old Cars</button>
        <button className='nav-item' onClick={()=>{setActiveCategory('new')}}>New Cars</button>
    </div>
  )
}

export default Navbar