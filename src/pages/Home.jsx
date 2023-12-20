import React from 'react'
import Blog from '../components/Blog'
import Faq from '../components/Faq'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Investment from '../components/Investment'
import MainFaq from '../components/MainFaq'
import Profitability from '../components/Profitability'
import Trusted from '../components/Trusted'

const Home = () => {
  return (
    <>
      <Hero/>
      <Faq/>
      <Trusted/>
      <Investment/>
      <Info/>
      <Profitability/>
      {/* <Blog/> */}
      {/* <MainFaq/> */}
    </>
  )
}

export default Home