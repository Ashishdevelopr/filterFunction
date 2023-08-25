import React, { useState } from 'react'
import "./App.css"
import Navbar from './Navbar'
import Category from './Category'

const App = () => {
  const [activeCategory, setActiveCategory] = useState('old')

  return (
    <div>
   <Navbar setActiveCategory={setActiveCategory}/>
   <Category activeCategory={activeCategory}/>
   </div>
  )
}

export default App