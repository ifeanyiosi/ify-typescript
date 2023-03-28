import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import routes from "@/routes.const";
import splash from "@/assets/splash.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const LandingPage = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("min-width: 1060px");
  const navigate = useNavigate();
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE MAIN HEADER */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="flex flex-col before:absolute before:-top-20 before:content-logotext">
                <span className="text-[80px] font-bold">IFEANYI</span>
                <span className="text-[40px]">
                  The Better Way to Send/Recieve money & Invest.
                </span>
              </div>
            </div>
            <p className="mt-8 md:text-start">
              This app helps over 4 million customers manage their cash, shop &
              get paid with ease.
            </p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex items-center gap-8 md:justify-start"
          >
            <div className="w-[200px]">
              <Button
                label="Join Now"
                variant="primary"
                onClick={() => navigate(routes.signup)}
              />
            </div>
            <div className="w-[200px]">
              <Button
                label="Contact us"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              />
            </div>
          </motion.div>
        </div>
        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img className="" src={splash} alt="home" />
        </div>
      </motion.div>
    </section>
  );
};

export default LandingPage;
