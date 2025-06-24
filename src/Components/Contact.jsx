import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { CiMail, CiLocationOn, CiPhone } from "react-icons/ci";
import {
  FaLinkedin,
  FaGithub,
  FaTwitterSquare,
  FaInstagram,
  FaCopy,
  FaExternalLinkAlt,
} from "react-icons/fa";
import toast from "react-hot-toast";

function Contact() {
  const OpenGit = () =>
    window.open("https://github.com/Anirudhakashid", "_blank");
  const OpenLinkedin = () =>
    window.open("https://www.linkedin.com/in/anirudha-kashid", "_blank");
  const OpenX = () =>
    window.open(
      "https://x.com/anirudha_kashid?t=irA8t6iHqRXKYrzoEYUaTQ&s=08",
      "_blank"
    );
  const OpenInsta = () =>
    window.open(
      "https://www.instagram.com/anirudha_.k?igsh=ajJkYzhqNDY3YTY=",
      "_blank"
    );

  const handleEmailRedirect = () => {
    try {
      window.location.href = `mailto:${CONTACT.email}`;
    } catch (err) {
      handleEmailCopy();
      toast.error("Failed to open email client. Email copied instead.", {
        duration: 3000,
      });
    }
  };

  const handleEmailCopy = () => {
    navigator.clipboard.writeText(CONTACT.email);
    toast.success("Email copied to clipboard!", { duration: 3000 });
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6 }}
          className="sm:text-5xl text-4xl font-bold text-center mb-20 mt-10 text-white"
        >
          Get In{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-start">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-lg text-neutral-300 leading-relaxed">
                I'm always interested in new opportunities and collaborations.
                Whether you have a project in mind or just want to chat about
                tech, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-neutral-900/60 to-neutral-800/40 border border-neutral-700/40 hover:border-neutral-600/60 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center">
                  <CiLocationOn className="text-2xl text-blue-400" />
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">Location</p>
                  <p className="text-white font-medium">{CONTACT.address}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-neutral-900/60 to-neutral-800/40 border border-neutral-700/40 hover:border-neutral-600/60 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center">
                  <CiPhone className="text-2xl text-green-400" />
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">Phone</p>
                  <p className="text-white font-medium">{CONTACT.phoneNo}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 rounded-2xl bg-gradient-to-br from-neutral-900/60 to-neutral-800/40 border border-neutral-700/40 hover:border-neutral-600/60 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                    <CiMail className="text-2xl text-purple-400" />
                  </div>
                  <div>
                    <p className="text-neutral-400 text-sm">Email</p>
                    <p className="text-white font-medium group-hover:text-purple-400 transition-colors">
                      {CONTACT.email}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEmailCopy}
                    className="p-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-colors"
                    title="Copy email"
                  >
                    <FaCopy className="text-purple-400 text-sm" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEmailRedirect}
                    className="p-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-colors"
                    title="Open email client"
                  >
                    <FaExternalLinkAlt className="text-purple-400 text-sm" />
                  </motion.button>
                </div>
              </motion.div>
            </div>

            <div className="pt-6">
              <p className="text-neutral-400 mb-4">Follow me on social media</p>
              <div className="flex flex-wrap gap-4">
                {[OpenGit, OpenLinkedin, OpenX, OpenInsta].map((fn, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -2, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={fn}
                    className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-lg"
                    style={{
                      background: [
                        "linear-gradient(to bottom right, #2d2d2d, #3a3a3a)",
                        "linear-gradient(to bottom right, #2563eb, #1d4ed8)",
                        "linear-gradient(to bottom right, #0ea5e9, #0284c7)",
                        "linear-gradient(to bottom right, #ec4899, #8b5cf6)",
                      ][idx],
                    }}
                  >
                    {[FaGithub, FaLinkedin, FaTwitterSquare, FaInstagram][idx]({
                      className: "text-xl text-white",
                    })}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center h-full"
          >
            <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 border border-neutral-700/50 w-full">
              <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to work together?
                </h3>
                <p className="text-neutral-300 mb-8 leading-relaxed">
                  I'm currently available for freelance work and new
                  opportunities. Let's discuss how we can bring your ideas to
                  life.
                </p>

                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEmailCopy}
                    className="w-full px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 font-semibold rounded-2xl hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaCopy className="text-sm" />
                    Copy Email Address
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={OpenLinkedin}
                    className="w-full px-8 py-4 bg-transparent border-2 border-neutral-600 text-white font-semibold rounded-2xl hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                  >
                    Connect on LinkedIn
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
