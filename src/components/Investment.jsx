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
    <div className="py-10 grid grid-cols-2 items-center gap-10">
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
              className={`p-3 ${
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
                <p className="text-white text-base mb-2 font-semibold">
                  {tab.subtitle}
                </p>
              )}
              {tab.desc}
              {tab.cards &&
                tab.cards.map((card) => {
                  return (
                    <div
                      className={`w-2/3 text-white flex items-center justify-between p-5 rounded-md backdrop-blur-md ${
                        card.title === "BTC"
                          ? "bg-red-card"
                          : "ml-auto -mt-5 bg-green-card"
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
                      <img src={card.imgDeg} alt="" />
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
        <h2 className="text-[42px] leading-[91%] font-semibold">
          Watch your <br /> cryptocurrency <br />{" "}
          <span className="text-light-green">investments grow</span>
        </h2>
        <p className="text-white/50">
          <strong className="text=white">
            From powerful trading bots to smart orders.
          </strong>
          <br />
          <span>
            Quantex gives you an advantage in the fast-changing world of crypto
            trading.
          </span>
        </p>
        <Link className="inline-block rounded-md text-sm font-semibold px-8 py-3 bg-light-green">
          Start using bot
        </Link>
      </div>
    </div>
  );
};

export default Investment;
