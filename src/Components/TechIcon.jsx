import { motion } from "framer-motion";
import { iconVariants } from "./Technologies";

function TechIcon({ icon: Icon, className = "", variants }) {
  return (
    <motion.div
      variants={variants || iconVariants(3)}
      initial="initial"
      animate="animate"
      className={`rounded-2xl border-4 border-neutral-800 p-4`}
    >
      <Icon className={`text-7xl ${className}`} />
    </motion.div>
  );
}

export default TechIcon;
