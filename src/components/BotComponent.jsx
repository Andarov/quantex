import React from 'react'
import { Link } from 'react-router-dom'
import degree from '../img/degree.png'

const BotComponent = () => {
  return (
    <div className='grid grid-cols-1 gap-3 items-center pt-10 pb-10 lg:grid-cols-2 xl:pb-20'>
        <div className='space-y-5'>
            <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl'>How work <br /> <span className='text-light-green'>Quantex</span></h1>
            <p className='text-sm sm:text-base'>
                <strong>From powerful trading botComponents to smart orders.</strong><br />
                <span className='text-white/60'>Quantex gives you an advantage in the fast-changing world of crypto trading.</span>
            </p>
            <div className='flex items-center text-sm space-x-3 sm:text-base'>
                <a className='px-8 py-3 bg-light-green rounded-lg font-semibold' href='#'>Start Using Bot</a>
            </div>
        </div>
        <div>
            <img src={degree} alt="degree trading" />
        </div>
    </div>
  )
}

export default BotComponent