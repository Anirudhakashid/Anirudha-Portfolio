import logo from "../assets/AnirudhaLogo.png";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitterSquare,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const OpenGit = () => {
    const Link = "https://github.com/Anirudhakashid";
    window.open(Link, "_blank");
  };

  const OpenLinkedin = () => {
    const Link = "https://www.linkedin.com/in/anirudha-kashid";
    window.open(Link, "_blank");
  };

  const OpenX = () => {
    const Link = "https://x.com/anirudha_kashid?t=irA8t6iHqRXKYrzoEYUaTQ&s=08";
    window.open(Link, "_blank");
  };

  const OpenInsta = () => {
    const Link = "https://www.instagram.com/anirudha_.k?igsh=ajJkYzhqNDY3YTY=";
    window.open(Link, "_blank");
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="sticky top-0 z-50 backdrop-blur-xl "
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-shrink-0 items-center"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                <span className="text-white text-xl font-bold">AK</span>
              </div>
              {/* Optional: Add a subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl blur-xl -z-10"></div>
            </div>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-6"
          >
            <motion.div
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <FaGithub
                onClick={OpenGit}
                className="text-2xl text-neutral-400 hover:text-white cursor-pointer transition-all duration-300"
              />
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </motion.div>

            <motion.div
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <FaLinkedin
                onClick={OpenLinkedin}
                className="text-2xl text-neutral-400 hover:text-blue-400 cursor-pointer transition-all duration-300"
              />
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></div>
            </motion.div>

            <motion.div
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <FaTwitterSquare
                onClick={OpenX}
                className="text-2xl text-neutral-400 hover:text-sky-400 cursor-pointer transition-all duration-300"
              />
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300"></div>
            </motion.div>

            <motion.div
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <FaInstagram
                onClick={OpenInsta}
                className="text-2xl text-neutral-400 hover:text-pink-400 cursor-pointer transition-all duration-300"
              />
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
