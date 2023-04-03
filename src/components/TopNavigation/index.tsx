import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";

type Props = {
  title: string;
  bgColor: string;
  onNavigateBack: () => void;
};

const TopNavigation = ({ title, bgColor, onNavigateBack }: Props) => {
  const [transition, setTransition] = useState<boolean>(false);
  const navigate = useNavigate();

  const scrolledSettings = {
    mainContainerStyle:
      "flex items-center gap-4 md:drop-shadow-[0_0_0_rgba(0,0,0,0.0)] drop-shadow-[0_1px_8px_rgba(0,0,0,0.10)]",
    titleStyle: "text-xl",
  };

  // Styles for when the window scroll is back to the top
  const unScrolledSettings = {
    mainContainerStyle:
      "flex items-center gap-4 pb-2 items-start sm:flex-row sm:items-center",
    titleStyle: "text-xl",
  };

  // Animation function to be called when the scroll event is fired
  const animateTopNavigation = () => {
    if (window.scrollY >= 20) setTransition(true);
    else setTransition(false);
  };

  useEffect(() => {
    // To listen for the scroll event
    window.addEventListener("scroll", animateTopNavigation);

    return () => {
      window.removeEventListener("scroll", animateTopNavigation);
    };
  }, []);

  // To navigate back by one page
  const backHandler = () => {
    onNavigateBack();
    navigate(-1);
  };

  return (
    <div
      className={`flex ${
        !transition
          ? unScrolledSettings.mainContainerStyle
          : scrolledSettings.mainContainerStyle
      } fixed left-0 top-0 z-10 w-full bg-white transition-all duration-500 sm:sticky sm:${bgColor} px-4 py-7 sm:mx-auto sm:py-4 ${bgColor}`}
    >
      <button
        type="button"
        onClick={backHandler}
        className="text-primary-4 text-primary bg-gray-2 inline-flex h-8 w-8 items-center justify-center rounded-lg text-xl sm:hidden lg:hidden"
      >
        <HiChevronLeft />
      </button>

      <div className="absolute left-[64px] hidden w-max items-center justify-between gap-4 sm:flex">
        <button
          type="button"
          onClick={backHandler}
          className="text-primary-4 text-primary bg-gray-2 left-8 inline-flex h-8 w-8 items-center justify-center gap-4 rounded-lg text-2xl"
        >
          <HiChevronLeft />
        </button>
        <p className="font-Karla tracking-tightest text-xl font-bold">Back</p>
      </div>
      {/* <span className="inline-flex h-2 w-8 rounded-[50%] flex-none items-center justify-center" /> */}

      <h3
        className={`font-Karla ${
          !transition
            ? unScrolledSettings.titleStyle
            : scrolledSettings.titleStyle
        } text-primary-10 m-0 font-bold tracking-[-1.28px] transition-all duration-500 sm:mx-auto`}
      >
        {title}
      </h3>
    </div>
  );
};

export default TopNavigation;
