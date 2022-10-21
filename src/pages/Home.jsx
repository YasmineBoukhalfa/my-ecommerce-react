import React from 'react'
import Annoncement from '../components/Annoncement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Letter from '../components/Letter'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Annoncement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Letter/>
        <Footer/>
    </div>
  )
}

export default Home