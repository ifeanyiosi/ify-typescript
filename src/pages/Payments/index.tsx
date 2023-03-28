import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Payments = ({ setSelectedPage }: Props) => {
  return (
    <section id="faqs" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div
        className=" md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Payments)}
      >
        kill me
      </motion.div>
    </section>
  );
};

export default Payments;
