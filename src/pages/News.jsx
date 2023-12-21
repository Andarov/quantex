import React, { useEffect } from 'react'
import Blog from '../components/Blog'
import BlogItems from '../components/BlogItems'
import MainFaq from '../components/MainFaq'

const News = () => {
  useEffect(()=>{
    document.title = 'Quantex | News'
  }, []);
  return (
    <>
        <Blog/>
        <BlogItems/>
        <MainFaq/>
    </>
  )
}

export default News