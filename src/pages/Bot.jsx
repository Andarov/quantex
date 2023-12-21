import React, { useEffect } from 'react'
import BotComponent from '../components/BotComponent'
import Investment from '../components/Investment'
import MainFaq from '../components/MainFaq'
import Trusted from '../components/Trusted'

const Bot = () => {
  useEffect(()=>{
    document.title = 'Quantex | How this work'
  }, []);
  return (
    <>
        <BotComponent/>
        <Trusted/>
        <Investment/>
        <MainFaq/>
    </>
  )
}

export default Bot