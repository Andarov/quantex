import React from 'react'
import Faq from '../components/Faq'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Investment from '../components/Investment'
import Trusted from '../components/Trusted'

const Home = () => {
  return (
    <>
      <Hero/>
      <Faq/>
      <Trusted/>
      <Investment/>
      <Info/>
    </>
  )
}

export default Home