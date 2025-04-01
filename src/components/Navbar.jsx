import logo from "../assets/logoY.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
<<<<<<< HEAD
=======
import leetcodeLogo from "../assets/Leetcode.png";

>>>>>>> e3f68fe (update on portfolio from 2024-2025)




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
<<<<<<< HEAD
=======
   <a href="https://leetcode.com/u/yaman27/"><img className="w-8 h-6" src={leetcodeLogo} alt="LeetCode" /></a>
>>>>>>> e3f68fe (update on portfolio from 2024-2025)
   </div>

  </nav>
  );
};
export default Navbar;
