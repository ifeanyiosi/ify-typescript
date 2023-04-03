import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import mobile4 from "../../assets/mobile4.png";
import mobile2 from "../../assets/mobile2.png";
import mobile3 from "../../assets/mobile3.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Payments = ({ setSelectedPage }: Props) => {
  return (
    <section id="payments" className="mx-auto min-h-full  w-5/6 py-20">
      <motion.div
        className=" md:flex "
        onViewportEnter={() => setSelectedPage(SelectedPage.Payments)}
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
            Fast Bank Transfers
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
            Send money to any bank in Nigeria very quickly.
          </motion.span>
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
          className="  mt-10  hidden  items-center lg:flex  "
        >
          <img className=" w-auto rounded-md" src={mobile4} alt="" />
        </motion.div>
      </motion.div>
      <motion.div
        className=" md:flex "
        onViewportEnter={() => setSelectedPage(SelectedPage.Payments)}
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
            Pay Bills
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
            Never get disconnected. Find and settle all your bills in one place
          </motion.span>
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
          className="  mt-10  hidden  items-center lg:flex  "
        >
          <img className=" w-auto rounded-md" src={mobile2} alt="" />
        </motion.div>
      </motion.div>

      <motion.div
        className=" md:flex "
        onViewportEnter={() => setSelectedPage(SelectedPage.Payments)}
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
            Pocket to Pocket (P2P)
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
            No more credit alert delays. Transfer money to anyone on Pocket App
            and they’ll get it immediately.
          </motion.span>
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
          className="  mt-10  hidden  items-center lg:flex  "
        >
          <img className=" w-auto rounded-md" src={mobile3} alt="" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Payments;
