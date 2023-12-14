import React from "react";
import { faqs } from "../data";
import faqimg from "../img/faqimg.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Faq = () => {
  return (
    <div className="py-5 flex flex-col-reverse justify-between items-center md:py-10 xl:flex-row">
      <ul className="hidden space-y-12 xl:block">
        {faqs.map((faq) => {
          return (
            <li
              key={faq.id}
              className="w-full max-w-sm p-6 rounded-md bg-header-bg border-l-2 border-light-green"
            >
              <h3 className="font-semibold text-lg mb-1">{faq.title}</h3>
              <p className="text-sm text-white/50">{faq.text}</p>
            </li>
          );
        })}
      </ul>

      <Swiper
        className="mySwiper xl:hidden"
        slidesPerView={1}
        spaceBetween={20}
        style={{ width: "100%" }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {faqs.map((faq) => {
          return (
            <SwiperSlide
              key={faq.id}
              className="w-full max-w-xs p-6 rounded-md bg-header-bg border-l-2 border-light-green"
            >
              <h3 className="font-semibold text-lg mb-1">{faq.title}</h3>
              <p className="text-sm text-white/50">{faq.text}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <img className="h-auto" src={faqimg} alt="" aria-hidden={"true"} />
    </div>
  );
};

export default Faq;
