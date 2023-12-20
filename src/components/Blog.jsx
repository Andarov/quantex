import React from "react";
import swipperImg from "../img/swipperImg.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Blog = () => {
  return (
    <div>
      <div className="w-full max-w-xl mx-auto mb-9">
        <h2 className="text-3xl text-center font-medium mb-5">Blog</h2>
        <p className="text-center text-base text-white/50 ">
          Stay updated with Our News, your go-to source for the latest
          happenings, insightful articles, and breaking stories across a
          spectrum of topics, keeping you informed and engaged
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          type: "progressbar",
        }}
        breakpoints={{
          500: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={swipperImg} alt="" />
            <div className="py-4">
                <h3 className="text-base font-semibold mb-1">24/7 Trading</h3>
                <p className="text-sm font-semibold text-white/60">Crypto bots can operate round the clock, taking advantage of market movements even when you're not actively monitoring.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={swipperImg} alt="" />
            <div className="py-4">
                <h3 className="text-base font-semibold mb-1">24/7 Trading</h3>
                <p className="text-sm font-semibold text-white/60">Crypto bots can operate round the clock, taking advantage of market movements even when you're not actively monitoring.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={swipperImg} alt="" />
            <div className="py-4">
                <h3 className="text-base font-semibold mb-1">24/7 Trading</h3>
                <p className="text-sm font-semibold text-white/60">Crypto bots can operate round the clock, taking advantage of market movements even when you're not actively monitoring.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={swipperImg} alt="" />
            <div className="py-4">
                <h3 className="text-base font-semibold mb-1">24/7 Trading</h3>
                <p className="text-sm font-semibold text-white/60">Crypto bots can operate round the clock, taking advantage of market movements even when you're not actively monitoring.</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Blog;
