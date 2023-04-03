import Button from "@/components/Button";
import routes from "@/routes.const";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiTarget, FiDollarSign } from "react-icons/fi";
import { FaTape } from "react-icons/fa";
import invest from "../../assets/investing.png";
import { fadeIn } from "@/shared/variants";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Invest = ({ setSelectedPage }: Props) => {
  const navigate = useNavigate();
  return (
    <section id="invest" className="mx-auto min-h-full   w-5/6 py-20">
      <motion.div
        className=" md:flex  md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Invest)}
      >
        <div className="mt-10 flex flex-col items-center justify-center lg:mt-32 lg:items-start lg:justify-start md:basis-3/5">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className=" text-center text-[40px] font-bold lg:text-[60px]"
          >
            Invest on the go.
          </motion.h1>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-4  text-center font-[16px]"
          >
            Invest securely and confidently on the go. Up to 25% returns, 6-12
            month duration.
          </motion.span>
          <div className="mt-10">
            <Button
              label="Start Saving Today"
              variant="primary"
              onClick={() => navigate(routes.signup)}
            />
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className=" mt-32 hidden  items-center justify-center lg:flex "
        >
          <img className="h-[300px] w-auto rounded-md" src={invest} alt="" />
        </motion.div>
      </motion.div>
      <div className="mt-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="font-400 text-center text-[30px] lg:text-[50px]">
            Simple investments with great returns
          </h2>
          <span className="text-center text-[16px]">
            Investments are made readily accessible to everyone
          </span>
        </div>
        <div className="mt-4 flex flex-col items-center justify-center lg:flex-row lg:gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-4 flex max-w-[352px] flex-col gap-4 rounded-[8px] bg-primary-100 p-4 py-8"
          >
            <div className="inline-flex h-6 w-6 items-center justify-center rounded-[50%] bg-primary-300">
              <FiTarget />
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[20px] font-bold text-black">
                Investments simplified
              </span>
              <span className="text-[16px] text-black">
                With minimum investments starting as low as N5,000, investment
                is no longer out of reach. Everyone is welcome.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-4 flex max-w-[352px] flex-col gap-4 rounded-[8px] bg-primary-100 p-4 py-8"
          >
            <div className="inline-flex h-6 w-6 items-center justify-center rounded-[50%] bg-primary-300">
              <FaTape />
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[20px] font-bold text-black">
                Invest confidently
              </span>
              <span className="text-[16px] text-black">
                All listed investments are properly due diligenced and highly
                secured opportunities.
              </span>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-4 flex max-w-[352px] flex-col gap-4 rounded-[8px] bg-primary-100 p-4 py-8"
          >
            <div className="inline-flex h-6 w-6 items-center justify-center rounded-[50%] bg-primary-300">
              <FiDollarSign />
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[20px] font-bold text-black">
                Diversify your portfolio
              </span>
              <span className="text-[16px] text-black">
                Invest in various industries such as fixed income instruments,
                agriculture, transportation, etc.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Invest;
