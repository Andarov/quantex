import React, { useEffect } from 'react'

const PageNotFound = () => {
  useEffect(()=>{
    document.title = 'Quantex | Page not found'
  }, []);
  return (
    <div className='flex flex-col justify-center items-center min-h-[400px] space-y-5 bg-contact-bg'>
        <p className='text-7xl font-bold error'>404</p>
    </div>
  )
}

export default PageNotFound