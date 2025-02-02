import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />

          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className={`${styles.heroHeadText} text-white`}>
          <h1>
            Hi I am <span className="text-[#915eff]">Sarthak</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>

            I develop Full Stack Morden Web App which has 3D <br  className="sm:block hidden"/>Animations, Realtime Data, and much more.  

          </p>
        </div>
      </div>
        <ComputersCanvas />

        <div className="absolute xs:bottom-10 bottom-32 w-full   justify-center items-center flex ">
          <a href="#about">
      <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex  justify-center items-start p-2">

        <motion.div 
        
        animate={{y: [0, 24,]}}
        transition={{duration: 1, repeat: Infinity, repeatType: "loop"}}
        className="w-3 h-3 bg-secondary rounded-full mb-1"
        />

            </div>
          </a>


        </div>
    </section>
  );
};

export default Hero;
