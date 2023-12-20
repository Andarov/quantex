import React from 'react'
import Logo1 from '../img/Logo1.png'
import Logo2 from '../img/Logo2.png'
import Logo3 from '../img/Logo3.png'
import Logo4 from '../img/Logo4.png'
import Logo5 from '../img/Logo5.png'
import Logo6 from '../img/Logo6.png'
import Logo7 from '../img/Logo7.png'
import Logo8 from '../img/Logo8.png'
import Logo9 from '../img/Logo9.png'
import Logo10 from '../img/Logo10.png'
import Logo11 from '../img/Logo11.png'
import Logo12 from '../img/Logo12.png'

const Trusted = () => {
  return (
    <div className='py-5 md:py-10'>
        <div className="p-5 bg-header-bg rounded-xl">
            <p className='text-white/80 text-center text-lg font-semibold mb-6'>Trusted by <span className='text-light-green'>500,000</span> traders from</p>

            <ul className='grid gap-10 grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12'>
                <li>
                    <img src={Logo1} alt="Trader" />
                </li>
                <li>
                    <img src={Logo2} alt="Trader" />
                </li>
                <li>
                    <img src={Logo3} alt="Trader" />
                </li>
                <li>
                    <img src={Logo4} alt="Trader" />
                </li>
                <li>
                    <img src={Logo5} alt="Trader" />
                </li>
                <li>
                    <img src={Logo6} alt="Trader" />
                </li>
                <li>
                    <img src={Logo7} alt="Trader" />
                </li>
                <li>
                    <img src={Logo8} alt="Trader" />
                </li>
                <li>
                    <img src={Logo9} alt="Trader" />
                </li>
                <li>
                    <img src={Logo10} alt="Trader" />
                </li>
                <li>
                    <img src={Logo11} alt="Trader" />
                </li>
                <li>
                    <img src={Logo12} alt="Trader" />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Trusted