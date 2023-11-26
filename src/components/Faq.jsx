import React from "react";
import { faqs } from "../data";
import faqimg from '../img/faqimg.png'

const Faq = () => {
  return (
    <div className="py-10 flex justify-between items-center">
      <ul className="space-y-12">
        {faqs.map((faq) => {
          return (
            <li key={faq.id} className="w-full max-w-sm p-6 rounded-md bg-header-bg border-l-2 border-light-green">
              <h3 className="font-semibold text-lg mb-1">{faq.title}</h3>
              <p className="text-sm text-white/50">
                {faq.text}
              </p>
            </li>
          );
        })}
      </ul>

      <img src={faqimg} alt="" />
    </div>
  );
};

export default Faq;
