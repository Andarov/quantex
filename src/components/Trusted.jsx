import React from 'react'
import logo1 from '../img/logo1.png'
import logo2 from '../img/logo2.png'
import logo3 from '../img/logo3.png'
import logo4 from '../img/logo4.png'
import logo5 from '../img/logo5.png'
import logo6 from '../img/logo6.png'
import logo7 from '../img/logo7.png'
import logo8 from '../img/logo8.png'
import logo9 from '../img/logo9.png'
import logo10 from '../img/logo10.png'
import logo11 from '../img/logo11.png'
import logo12 from '../img/logo12.png'

const Trusted = () => {
  return (
    <div className='py-10'>
        <div className="p-5 bg-header-bg rounded-xl">
            <p className='text-white/80 text-center text-lg font-semibold mb-6'>Trusted by <span className='text-light-green'>500,000</span> traders from</p>

            <ul className='grid grid-cols-12 gap-10'>
                <li>
                    <img src={logo1} alt="Trader" />
                </li>
                <li>
                    <img src={logo2} alt="Trader" />
                </li>
                <li>
                    <img src={logo3} alt="Trader" />
                </li>
                <li>
                    <img src={logo4} alt="Trader" />
                </li>
                <li>
                    <img src={logo5} alt="Trader" />
                </li>
                <li>
                    <img src={logo6} alt="Trader" />
                </li>
                <li>
                    <img src={logo7} alt="Trader" />
                </li>
                <li>
                    <img src={logo8} alt="Trader" />
                </li>
                <li>
                    <img src={logo9} alt="Trader" />
                </li>
                <li>
                    <img src={logo10} alt="Trader" />
                </li>
                <li>
                    <img src={logo11} alt="Trader" />
                </li>
                <li>
                    <img src={logo12} alt="Trader" />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Trusted