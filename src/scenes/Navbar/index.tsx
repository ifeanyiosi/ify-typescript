import Button from "@/components/Button";
import useMediaQuery from "@/hooks/useMediaQuery";
import routes from "@/routes.const";
import { SelectedPage } from "@/shared/types";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Link from "./Link";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navBg = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav className="">
      <div
        className={` ${flexBetween} fixed top-0 z-30 w-full bg-gray-100 py-6 `}
      >
        <div className={`${flexBetween} mx-auto w-5/6  `}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left side */}
            <button className="font-bold text-[20px]">IFEANYI</button>

            {/* Right */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Invest"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="FAQs"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <div>
                    <Button
                      label="Sign in"
                      variant="secondary"
                      onClick={() => navigate(routes.login)}
                    />
                  </div>
                  <div className="">
                    <Button
                      label="Create free account"
                      variant="primary"
                      onClick={() => navigate(routes.signup)}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="rounded-full bg-secondary-500 p-2"
              >
                <AiOutlineMenu className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {!isAboveMediumScreens && menuOpen && (
        <div className="fixed right-0 bottom-0 z-[80] h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <AiOutlineClose className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Invest"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="FAQs"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
