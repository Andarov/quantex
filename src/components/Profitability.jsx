import React from "react";
import { Link } from "react-router-dom";
import degree from "../img/degree.png";
import bitcoin from "../img/bitcoin.svg";

const Profitability = () => {
  return (
    <div className="py-8 grid grid-cols-2 gap-9 items-center">
      {/* content */}
      <div className="space-y-5">
        <h2 className="text-4xl font-semibold leading-[90%] text-white/80">
          Predicted Profitability at <br /> Various Intervals
        </h2>
        <p className="text-lg font-medium">
          <span className="text-white/80">
            QuantEx promises stable profitability:Daily Yield: <br />
            0.2% - 0.8% per day. <br />
            Monthly Return: 6% - 24%, which can reach 144% per year.
          </span>
          <br />
          <span className="text-white/40">
            The development process lasted 10 months, allowing us to carefully
            configure the bot, eliminate errors and enrich the database. This
            experience confirms the reliability and success of QuantEx, making
            it one of the world's best cryptocurrency trading solutions.
          </span>
        </p>
        <Link className="text-sm font-semibold bg-light-green px-8 py-3 rounded-md inline-block">
          Start using bot
        </Link>
      </div>
      {/* image */}
      <div className="bg-tab-bg border border-white/10 rounded-3xl">
        <div className="p-10">
          <div className="flex items-center justify-between">
            {/* left */}
            <div>
              <div className="flex items-center">
                <h3 className="text-2xl font-medium text-white/80 leading-7 mr-2">
                  BTC
                </h3>
                <img src={bitcoin} alt="" />
              </div>
              <span className="text-3xl font-medium leading-10">
                $ 16,590.40
              </span>
            </div>

            {/* right */}
            <div className="space-y-1">
                <div className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#FF007A] inline-block rounded-full mr-2"></span>
                    <span className="text-xs leading-[18px] font-medium">Lower Price</span>
                </div>
                <div className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#07BEB8] inline-block rounded-full mr-2"></span>
                    <span className="text-xs leading-[18px] font-medium">Higher Price</span>
                </div>
            </div>
          </div>
        </div>
        <img src={degree} alt="" />
      </div>
    </div>
  );
};

export default Profitability;
