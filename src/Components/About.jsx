import { motion } from "framer-motion";
import About2 from "../assets/About2.png";

function About() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-20"
        >
          <span className="text-white">Behind</span>
          <span className="text-white ml-4">the Code</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image Section */}
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-visible rounded-3xl w-full max-w-[650px] mx-auto shadow-2xl">
              <img
                src={About2}
                alt="About Me"
                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105 brightness-125 contrast-110 saturate-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 via-transparent to-transparent"></div>

              <div className="absolute inset-0 rounded-3xl border border-white/10"></div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400/40 to-cyan-400/40 rounded-full blur-2xl animate-pulse"></div>
            <div
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400/30 to-yellow-400/30 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center h-full"
          >
            <div className="space-y-8">
              <div className="relative">
                <p className="text-xl lg:text-2xl text-neutral-300 leading-relaxed font-light">
                  When I'm not crafting pixels into experiences, you'll find me
                  diving deep into the latest frameworks, experimenting with new
                  design patterns or learning something new. Every line of code
                  tells a story, and I'm here to make sure it's a compelling
                  one.
                </p>

                <div className="absolute -top-6 -left-6 text-6xl text-neutral-700 font-serif">
                  "
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-neutral-900/60 to-neutral-800/40 border border-neutral-700/40 hover:border-neutral-600/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg shadow-blue-500/30"></div>
                    <h3 className="text-white font-semibold">Code Craftsman</h3>
                  </div>
                  <p className="text-neutral-400 text-sm">
                    Clean, Scalable Solutions
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-neutral-900/60 to-neutral-800/40 border border-neutral-700/40 hover:border-neutral-600/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg shadow-purple-500/30"></div>
                    <h3 className="text-white font-semibold">Design Thinker</h3>
                  </div>
                  <p className="text-neutral-400 text-sm">
                    User-First Approach
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-neutral-900/60 to-neutral-800/40 border border-neutral-700/40 hover:border-neutral-600/60 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg shadow-orange-500/30"></div>
                    <h3 className="text-white font-semibold">Tech Explorer</h3>
                  </div>
                  <p className="text-neutral-400 text-sm">
                    Always Experimenting
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-neutral-900/60 to-neutral-800/40 border border-neutral-700/40 hover:border-neutral-600/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-green-600 shadow-lg shadow-green-500/30"></div>
                    <h3 className="text-white font-semibold">
                      Continuous Learner
                    </h3>
                  </div>
                  <p className="text-neutral-400 text-sm">Always Growing</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
