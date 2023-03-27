import Navbar from "@/scenes/Navbar";
import React, { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import LandingPage from "../LandingPage";
import Invest from "../Invest";
import FAQ from "../FAQ";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-200 ">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <LandingPage setSelectedPage={setSelectedPage} />
      <Invest setSelectedPage={setSelectedPage} />
      <FAQ setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default Home;
