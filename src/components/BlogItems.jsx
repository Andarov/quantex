import React from 'react'
import bigTrade from '../img/bigTrade.png'

const BlogItems = () => {
    const blogs = [
        {
            id: 1,
            image: bigTrade,
            title: 'Ripple Coin Explained: Your Definitive XRP Coin Review',
            description: "Whether you're a card carrying member of the XRP Army or Ripple skeptic, this no-nonsense guide will give you the unbiased details you need to make up your own mind.",
            date: '31.11.2023',
            hashtags: ['#bot', '#crypto']
        },
        {
            id: 2,
            image: bigTrade,
            title: 'Ripple Coin Explained: Your Definitive XRP Coin Review',
            description: "Whether you're a card carrying member of the XRP Army or Ripple skeptic, this no-nonsense guide will give you the unbiased details you need to make up your own mind.",
            date: '31.11.2023',
            hashtags: ['#bot', '#crypto']
        },
        {
            id: 3,
            image: bigTrade,
            title: 'Ripple Coin Explained: Your Definitive XRP Coin Review',
            description: "Whether you're a card carrying member of the XRP Army or Ripple skeptic, this no-nonsense guide will give you the unbiased details you need to make up your own mind.",
            date: '31.11.2023',
            hashtags: ['#bot', '#crypto']
        }
    ];
  return (
    <div className='py-10 space-y-8 md:py-16'>
        {
            blogs.map((blog)=>{
                return(
                    <div key={blog.id} className='w-full max-w-[921px] rounded-2xl border border-white/10'>
                        <img src={blog.image} alt={blog.description} />
                        <div className='py-6 px-5'>
                            <div className='mb-8'>
                                <h3 className='mb-3 text-xl font-semibold md:text-2xl'>Ripple Coin Explained: Your Definitive XRP Coin Review</h3>
                                <p className='text-white/80'>Whether you're a card carrying member of the XRP Army or Ripple skeptic, this no-nonsense guide will give you the unbiased details you need to make up your own mind.</p>
                            </div>
                            <div className="flex justify-between items-center text-white/60">
                                <span>{blog.date}</span>
                                <div className='space-x-3'>
                                    {blog.hashtags.map((hashtag)=>{
                                        return(
                                            <span>{hashtag}</span>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default BlogItems