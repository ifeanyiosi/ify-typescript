import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: string) => void;
};

const Invest = ({ setSelectedPage }: Props) => {
  return (
    <section id="invest" className="mx-auto min-h-full  w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Invest)}>

      </motion.div>
    </section>
  );
};

export default Invest;
