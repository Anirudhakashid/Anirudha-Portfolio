import logo from "../assets/AnirudhaLogo.png";
import {
  FaLinkedin,
  FaGithub,
  FaTwitterSquare,
  FaInstagram,
  FaCrosshairs,
} from "react-icons/fa";

const Navbar = () => {
  const OpenGit = () => {
    const Link = "https://github.com/Anirudhakashid";
    window.open(Link, "_blank");
  };

  const OpenLinkedin = () => {
    const Link = "";
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
    <nav className="mb-20 flex items-center justify-between  py-6 h-10 ">
      <div className=" flex flex-shrink-0 items-center text-white text-2xl ml-5">
        {/* <img src={logo} alt="logo" className=" h-32 -mx-3 mt-2 " /> */}
        <p>Ak</p>
      </div>
      <div className=" m-8 flex items-center justify-center gap-4 text-2xl text-white">
        <FaGithub
          onClick={OpenGit}
          className=" hover:cursor-pointer hover:text-slate-400 "
        />
        <FaLinkedin
          onClick={OpenLinkedin}
          className=" hover:cursor-pointer hover:text-slate-400"
        />
        <FaTwitterSquare
          onClick={OpenX}
          className=" hover:cursor-pointer hover:text-slate-400 "
        />
        <FaInstagram
          onClick={OpenInsta}
          className=" hover:cursor-pointer hover:text-slate-400"
        />
      </div>
    </nav>
  );
};

export default Navbar;
