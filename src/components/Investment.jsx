import React from "react";
import { Link } from "react-router-dom";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { tabs } from "../data";

const Investment = () => {
  const [activeTab, setActiveTab] = React.useState("bots");

  return (
    <div className="flex flex-col-reverse py-5 lg:grid lg:grid-cols-2 items-center gap-10 md:py-10">
      {/* tabs */}
      <Tabs
        value={activeTab}
        className="bg-tab-bg border border-white/10 p-5 rounded-xl"
      >
        <TabsHeader
          className="rounded-none border-b border-white/20 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.value}
              value={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-1 py-3 text-xs sm:text-sm md:text-base md:p-3 ${
                activeTab === tab.value
                  ? "text-white border-light-green border-b"
                  : "text-white/40"
              }`}
            >
              {tab.label}
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody>
          {tabs.map((tab) => (
            <TabPanel key={tab.value} value={tab.value}>
              {tab.subtitle && (
                <p className="text-white mb-2 font-semibold sm:text-sm md:text-base">
                  {tab.subtitle}
                </p>
              )}
              <p className="sm:text-sm md:text-base mb-5 lg:mb-0">{tab.desc}</p>
              {tab.cards &&
                tab.cards.map((card) => {
                  return (
                    <div
                      className={`w-full text-white flex items-center justify-between p-3 rounded-md backdrop-blur-md lg:w-2/3 lg:p-5 ${
                        card.title === "BTC"
                          ? "bg-red-card"
                          : "lg:ml-auto lg:-mt-5 bg-green-card"
                      }`}
                    >
                      <div className="flex items-center">
                        {/* img */}
                        <div
                          className={`w-14 h-14 flex justify-center items-center rounded-xl mr-4 ${
                            card.title === "BTC"
                              ? "bg-red-card"
                              : "bg-green-card"
                          }`}
                        >
                          <img src={card.img} alt="" />
                        </div>
                        <div className="flex flex-col items-center">
                          <h3>{card.title}</h3>
                          <span className="text-white/50">{card.percent}</span>
                        </div>
                      </div>
                      <img className="hidden sm:block" src={card.imgDeg} alt="" />
                      <div className="flex flex-col items-center">
                        <span>{card.sum}</span>
                        <span className="text-white/50">{card.total}</span>
                      </div>
                    </div>
                  );
                })}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
      {/* content */}
      <div className="space-y-5">
        <h2 className="text-2xl leading-[91%] font-semibold md:text-3xl lg:text-[42px]">
          Watch your <br /> cryptocurrency <br />{" "}
          <span className="text-light-green">investments grow</span>
        </h2>
        <p className="text-white/50 text-sm md:text-base">
          <strong className="text=white">
            From powerful trading bots to smart orders.
          </strong>
          <br />
          <span>
            Quantex gives you an advantage in the fast-changing world of crypto
            trading.
          </span>
        </p>
        <Link className="inline-block rounded-md text-sm font-semibold px-8 py-2 bg-light-green md:py-3">
          Start using bot
        </Link>
      </div>
    </div>
  );
};

export default Investment;
