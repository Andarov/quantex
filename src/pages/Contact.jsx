import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-[400px] space-y-5 bg-contact-bg'>
        <a className='flex items-center text-2xl space-x-2' href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                <path d="M22.667 27.8334H9.33366C5.33366 27.8334 2.66699 25.8334 2.66699 21.1667V11.8334C2.66699 7.16675 5.33366 5.16675 9.33366 5.16675H22.667C26.667 5.16675 29.3337 7.16675 29.3337 11.8334V21.1667C29.3337 25.8334 26.667 27.8334 22.667 27.8334Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.6663 12.5L18.493 15.8333C17.1197 16.9267 14.8663 16.9267 13.493 15.8333L9.33301 12.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>info@quantex.com</span>
        </a>
        <a className='flex items-center text-2xl space-x-2' href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                <path d="M16.5003 29.8334C23.8641 29.8334 29.8337 23.8639 29.8337 16.5001C29.8337 9.13628 23.8641 3.16675 16.5003 3.16675C9.13653 3.16675 3.16699 9.13628 3.16699 16.5001C3.16699 23.8639 9.13653 29.8334 16.5003 29.8334Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.1665 4.5H12.4998C9.8998 12.2867 9.8998 20.7133 12.4998 28.5H11.1665" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.5 4.5C23.1 12.2867 23.1 20.7133 20.5 28.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.5 21.8333V20.5C12.2867 23.1 20.7133 23.1 28.5 20.5V21.8333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.5 12.5C12.2867 9.90005 20.7133 9.90005 28.5 12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>quantex.com</span>
        </a>
    </div>
  )
}

export default Contact