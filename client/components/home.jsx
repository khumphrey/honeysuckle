import React from 'react'
import {Link} from 'react-router-dom'
import Carousel from './carousel'
import About from './about'

const Home = () => (
  <div>
    <Carousel></Carousel>
    <About></About>
  </div>
)

export default Home