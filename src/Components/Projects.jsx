import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

function Projects() {
  const HandleDemo = (link) => {
    console.log(link);
    const links = link;
    window.open(links, "_blank");
  };

  return (
    <div id="projects" className="border-b border-neutral-800 pb-44">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 p-2 text-center sm:text-5xl text-4xl font-bold bg-gradient-to-r from-[#38bdf8] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>

      <div className="space-y-12">
        {PROJECTS.map((projects, index) => (
          <motion.div
            key={index}
            className="flex flex-wrap lg:justify-center bg-neutral-900/30 rounded-xl p-6 border border-neutral-800/50 hover:border-neutral-700/70 transition-all duration-300"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3 flex justify-center lg:justify-start"
            >
              <div className="relative w-56 h-40 lg:w-80 lg:h-52 mb-6">
                <img
                  src={projects.image}
                  alt={projects.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg border border-neutral-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent rounded-lg"></div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-2/3 lg:pl-6"
            >
              <h6 className="mb-3 font-bold text-xl text-white">
                {projects.title}
              </h6>
              <p className="mb-6 text-neutral-300 leading-relaxed">
                {projects.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {projects.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-neutral-800 border border-neutral-700 px-3 py-1 text-sm font-medium text-neutral-200 hover:bg-neutral-700 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <motion.button
                className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg border border-transparent hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                onClick={() => HandleDemo(projects.link)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <span>View Demo</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
