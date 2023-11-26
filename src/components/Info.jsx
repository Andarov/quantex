import React from 'react'

const Info = () => {
  return (
    <div className='py-10 grid grid-cols-3 gap-5'>
        {/* 1 */}
        <div className='text-center'>
            <span className='text-[52px] leading-[90%] text-light-green font-bold mb-1'>500K</span>
            <h3 className='text-base font-medium'>TRADERS WORLDWIDE</h3>
        </div>
        {/* 2 */}
        <div className='text-center'>
            <span className='text-[52px] leading-[90%] text-light-green font-bold mb-1'>3.7M</span>
            <h3 className='text-base font-medium'>BOTS STARTED</h3>
        </div>
        {/* 3 */}
        <div className='text-center'>
            <span className='text-[52px] leading-[90%] text-light-green font-bold mb-1'>$300B</span>
            <h3 className='text-base font-medium'>TRADING VOLUME</h3>
        </div>
    </div>
  )
}

export default Info