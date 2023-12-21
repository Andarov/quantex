import React from 'react'
import { useEffect } from 'react'
import AboutQuantex from '../components/AboutQuantex'
import Info from '../components/Info'
import MainFaq from '../components/MainFaq'
import Profitability from '../components/Profitability'
import Trusted from '../components/Trusted'

const About = () => {
  useEffect(()=>{
    document.title = 'Quantex | About'
  }, []);
  return (
    <>
        <AboutQuantex/>
        <Trusted/>
        <Profitability/>
        <Info/>
        <MainFaq/>
    </>
  )
}

export default About