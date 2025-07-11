import React from "react";
import { HERO_CONTENT } from "../constants";
import Dp from "../assets/AnirudhaProfile.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay } },
});

function Hero() {
  return (
    <div className="border-b border-neutral-800 pb-12 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center min-h-screen justify-center gap-12">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4"
            >
              Anirudha Kashid
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-3xl lg:text-5xl font-semibold tracking-tight mb-6"
            >
              Frontend Web Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="text-xl text-neutral-300 max-w-xl font-light leading-relaxed mb-6"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="mt-4"
            >
              {/* view my work button  */}
              <button
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95"
              >
                View My Work
              </button>

              {/* download CV button */}
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Anirudha_Resume.pdf";
                  link.download = "kashidAniruda_resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="px-8 py-4 my-3 mx-3 bg-transparent border-2 border-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-600/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 border-blue-500 hover:border-purple-600"
              >
                Download CV
              </button>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="relative"
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <img
                  src={Dp}
                  alt="Profile"
                  className="rounded-full w-full h-full object-cover brightness-125 contrast-110 saturate-110 shadow-2xl border border-white/10 transition-transform duration-700 hover:scale-105"
                />

                {/* Glow effects */}
                <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-blue-400/40 to-cyan-400/40 rounded-full blur-2xl animate-pulse"></div>
                <div
                  className="absolute bottom-4 left-4 w-40 h-40 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full blur-2xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-1/2 right-8 w-20 h-20 bg-gradient-to-br from-orange-400/30 to-yellow-400/30 rounded-full blur-xl animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>

                {/* Floating dots */}
                <div className="absolute -top-6 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                <div
                  className="absolute -bottom-4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute top-1/4 -left-4 w-2 h-2 bg-pink-400 rounded-full animate-bounce"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
