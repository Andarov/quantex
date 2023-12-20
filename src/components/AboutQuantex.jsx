import React from 'react'
import { Link } from 'react-router-dom'
import faqimg from '../img/faqimg.png'

const AboutQuantex = () => {
  return (
    <div className='grid grid-cols-1 gap-3 items-center pt-10 pb-10 lg:grid-cols-2 xl:pb-20'>
        <div>
            <img src={faqimg} alt="FAQ img" />
        </div>
        <div className='space-y-5'>
            <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl'>About <br /> <span className='text-light-green'>Quantex</span></h1>
            <p className='text-sm sm:text-base'>
                <strong>QuantEx promises stable profitability: <br /> Daily Yield: 0.2% - 0.8% per day. <br /> Monthly Return: 6% - 24%, which can reach 144% per year.</strong><br />
                <span className='text-white/60'>The development process lasted 10 months, allowing us to carefully configure the bot, eliminate errors and enrich the database. This experience confirms the reliability and success of QuantEx, making it one of the world's best cryptocurrency trading solutions.</span>
            </p>
            <div className='flex items-center text-sm space-x-3 sm:text-base'>
                <Link className='px-8 py-3 bg-light-green rounded-lg font-semibold' to='/'>More Info</Link>
                <Link className='px-8 py-3 bg-light-green rounded-lg font-semibold' to='/how-it-work'>How Work Bot</Link>
            </div>
        </div>
    </div>
  )
}

export default AboutQuantex