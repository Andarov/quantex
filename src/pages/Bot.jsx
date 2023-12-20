import React from 'react'
import BotComponent from '../components/BotComponent'
import Investment from '../components/Investment'
import MainFaq from '../components/MainFaq'
import Trusted from '../components/Trusted'

const Bot = () => {
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