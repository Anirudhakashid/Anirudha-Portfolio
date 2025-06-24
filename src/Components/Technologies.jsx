import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiVisualstudiocode,
  SiAppwrite,
  SiSupabase,
  SiVercel,
  SiNetlify,
  SiShadcnui,
  SiGithub,
  SiReactrouter,
  SiRedux,
  SiC,
} from "react-icons/si";

import { RiJavaFill, RiJavaLine } from "react-icons/ri";

import { motion } from "framer-motion";
import TechIcon from "./TechIcon";

export const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const technologiesIcon = [
  { icon: SiC, className: "text-7xl text-blue-500" },
  { icon: RiJavaLine, className: "text-7xl text-orange-500" },
  { icon: SiHtml5, className: "text-7xl text-orange-400" },
  { icon: SiCss3, className: "text-7xl text-blue-400" },
  { icon: SiJavascript, className: "text-7xl text-yellow-400" },
  { icon: SiReact, className: "text-7xl text-cyan-400" },
  { icon: SiTailwindcss, className: "text-7xl text-sky-400" },
  { icon: SiGit, className: "text-7xl text-red-400" },
  { icon: SiVisualstudiocode, className: "text-7xl text-blue-500" },
  { icon: SiAppwrite, className: "text-7xl text-purple-400" },
  { icon: SiSupabase, className: "text-7xl text-green-400" },
  { icon: SiVercel, className: "text-7xl text-blue-400" },
  { icon: SiNetlify, className: "text-7xl text-green-400" },
  { icon: SiShadcnui, className: "text-7xl" },
  { icon: SiGithub, className: "text-7xl text-gray-400" },
  { icon: SiReactrouter, className: "text-7xl text-blue-400" },
  { icon: SiRedux, className: "text-7xl text-purple-400" },
];

function Technologies() {
  return (
    <div className="border-b  border-neutral-950 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap break-all items-center justify-center gap-4"
      >
        {technologiesIcon.map((tech) => {
          return (
            <TechIcon
              key={tech.icon}
              icon={tech.icon}
              className={tech.className}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

export default Technologies;
