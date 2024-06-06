import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import RegisterPage from './RegisterPage'
import Location from './Location'
import AboutUs from './AboutUs'
import Application from './Application'
import Sponser from './Sponser'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
      <RegisterPage/>
      <Location/>
      <AboutUs/>
      <Application/>
      <Sponser/>
    </div>
  )
}

export default Home