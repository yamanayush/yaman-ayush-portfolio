import logo from "../assets/logoY.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";




const Navbar = () => {
  return (
  <nav className=" mb-20 flex items-center justify-between py-6">
   <div className="flex flex-shrink-0 items-center">
    <img className="mx-2 w-20" src={logo} alt="logo" />
   </div>
   <div className="m-8 flex items-center justify-center gap-4 text-2xl">
   <a href="https://www.linkedin.com/in/yaman-ayush"><FaLinkedin /></a>
   <a href="https://github.com/yamanayush"><FaGithub /></a>
   <a href="https://www.instagram.com/ur_yaman/"><FaInstagram /></a>
   <a href="https://x.com/yaman_ayush"><FaSquareXTwitter /></a>
   </div>

  </nav>
  );
};
export default Navbar;
