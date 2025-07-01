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

import { RiJavaLine } from "react-icons/ri";

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
  { icon: SiC, className: "text-blue-500", name: "C Programming" },
  { icon: RiJavaLine, className: "text-orange-500", name: "Java" },
  { icon: SiHtml5, className: "text-orange-400", name: "HTML5" },
  { icon: SiCss3, className: "text-blue-400", name: "CSS3" },
  { icon: SiJavascript, className: "text-yellow-400", name: "JavaScript" },
  { icon: SiReact, className: "text-cyan-400", name: "React" },
  { icon: SiTailwindcss, className: "text-sky-400", name: "Tailwind CSS" },
  { icon: SiGit, className: "text-red-400", name: "Git" },
  { icon: SiVisualstudiocode, className: "text-blue-500", name: "VS Code" },
  { icon: SiAppwrite, className: "text-purple-400", name: "Appwrite" },
  { icon: SiSupabase, className: "text-green-400", name: "Supabase" },
  { icon: SiVercel, className: "text-blue-400", name: "Vercel" },
  { icon: SiNetlify, className: "text-green-400", name: "Netlify" },
  { icon: SiShadcnui, className: "text-slate-300", name: "Shadcn UI" },
  { icon: SiGithub, className: "text-gray-300", name: "GitHub" },
  { icon: SiReactrouter, className: "text-blue-400", name: "React Router" },
  { icon: SiRedux, className: "text-purple-400", name: "Redux" },
];

// Helper function to extract color from className
const getIconColor = (className) => {
  return (
    className.split(" ").find((c) => c.startsWith("text-")) || "text-gray-400"
  );
};

function Technologies() {
  // Split technologies into two rows
  const firstRow = technologiesIcon.slice(0, 9);
  const secondRow = technologiesIcon.slice(9);

  return (
    <div className="border-b border-neutral-950 pb-24 overflow-hidden">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-12 sm:my-20 text-3xl sm:text-4xl lg:text-5xl p-2 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-600 bg-clip-text text-transparent text-center font-bold"
      >
        Technologies
      </motion.h2>

      <div className="space-y-6 sm:space-y-8">
        {/* First row - sliding right to left */}
        <div className="relative">
          <motion.div
            className="flex gap-3 sm:gap-4 lg:gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Duplicate items for seamless loop */}
            {[...firstRow, ...firstRow].map((tech, index) => (
              <motion.div
                key={`row1-${index}`}
                className="group relative flex items-center gap-2 sm:gap-3 bg-neutral-900/40 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 border border-neutral-800/50 hover:border-neutral-700/70 transition-all duration-300 whitespace-nowrap min-w-fit cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <tech.icon
                  className={`relative z-10 text-lg sm:text-2xl lg:text-3xl drop-shadow-lg ${getIconColor(
                    tech.className
                  )}`}
                />
                <span className="relative z-10 text-xs sm:text-sm lg:text-base text-neutral-200 font-medium">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second row - sliding left to right */}
        <div className="relative">
          <motion.div
            className="flex gap-3 sm:gap-4 lg:gap-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Duplicate items for seamless loop */}
            {[...secondRow, ...secondRow].map((tech, index) => (
              <motion.div
                key={`row2-${index}`}
                className="group relative flex items-center gap-2 sm:gap-3 bg-neutral-900/40 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 border border-neutral-800/50 hover:border-neutral-700/70 transition-all duration-300 whitespace-nowrap min-w-fit cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-cyan-400/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <tech.icon
                  className={`relative z-10 text-lg sm:text-2xl lg:text-3xl drop-shadow-lg ${getIconColor(
                    tech.className
                  )}`}
                />
                <span className="relative z-10 text-xs sm:text-sm lg:text-base text-neutral-200 font-medium">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-20 sm:w-32 h-full bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-20 sm:w-32 h-full bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none z-10"></div>
    </div>
  );
}

export default Technologies;
