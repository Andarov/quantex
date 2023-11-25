import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet} from "react-router-dom";

const MainLayout = () => {

  return (
    <div className="flex flex-col bg-main-bg text-white w-full min-h-screen">
      <Header />
      <main className="bg-main-bg grow">
        <div className="w-full max-w-base mx-auto px-5">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
