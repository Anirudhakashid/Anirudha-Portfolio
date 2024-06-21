import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

function Projects() {
  const HandleDemo = (link) => {
    console.log(link);
    const links = link;
    window.open(links, "_blank");
  };

  return (
    <div className="border-b border-neutral-950 pb-44">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((projects, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={projects.image}
                width={150}
                height={150}
                alt={projects.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1}}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{projects.title}</h6>
              <p className="mb-4 text-neutral-400">{projects.description}</p>
              {projects.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium "
                >
                  {tech}
                </span>
              ))}
              <br />
              <br />
              <span
                className=" bg-neutral-900 rounded px-2 py-1  text-sm font-medium hover:cursor-pointer hover:bg-slate-500"
                onClick={() => HandleDemo(projects.link)}
              >
                Demo
              </span>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
