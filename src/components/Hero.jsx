import React from 'react'
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <div className='py-10'>
        <div className="w-full max-w-4xl mx-auto text-center space-y-6">
            <p className='text-6xl font-semibold leading-[91%] '>The best way to predict <br /> <span className='text-light-green'>the future is to create it</span></p>
            <p className='w-full max-w-2xl mx-auto text-center font-medium'><strong>We present QuantEx</strong>   <span className='text-white/50'>- a unique project that combines artificial intelligence and cryptocurrency exchanges. Our mission is automated trading in the cryptocurrency markets with stable profits.</span></p>
            <Link className='inline-block text-xl font-semibold bg-light-green w-[260px] text-center py-5 rounded-md'>About Quantex</Link>
        </div>
    </div>
  )
}

export default Hero