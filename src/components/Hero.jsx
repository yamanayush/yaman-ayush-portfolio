import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/yamanPhoto.png";
import { motion } from "framer-motion";
import { RiNewspaperLine } from "react-icons/ri";

const container= (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x:0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    },
});

const Hero = () => {
  return <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
            <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Yaman Ayush</motion.h1>
            <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                Full Stack Developer
            </motion.span>
            <motion.p variants={container(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">
                {HERO_CONTENT}
            </motion.p>
            <motion.a href="https://drive.google.com/file/d/1X2g8le94phvFoj1atYGE85IG-OFuTYve/view?usp=drive_link" variants={container(1)} initial="hidden" animate="visible"><button className="mr-2 border rounded bg-neutral-950 px-2 py-1 text-sm font-medium text-purple-900"><div className="m-100 flex items-center justify-center gap-0.5 text-2xl"><RiNewspaperLine />Resume </div></button></motion.a>
        </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-10">
        <div className="flex justify-center">
            <motion.img initial={{x:100, opacity: 0}} animate={{x:0, opacity:1}} transition={{duration: 1, delay: 1.2}} src={profilePic} alt="Yaman" />
        </div>
        </div>
    </div>
  </div>
};

export default Hero;
