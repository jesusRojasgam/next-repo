import React from "react";
import info from "../../db/db.json";
import Link from "next/link";
import { motion } from "framer-motion";

const { basic_info } = info;
const Hero = () => {
  return (
    <div className="hero">
      <motion.img
        src="./images/c20e5cbb-8762-40fe-89fb-59fc9af636e7.jpg"
        alt="foto Jesus Rojas"
        whileHover={{
          scale: 1.02,
        }}
        initial={{ scale: 1.4, y: 20 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7 }}
      />
      <motion.p
        whileHover={{
          scale: 1.05,
          textShadow: "1px 2px 2px black",
        }}
      >
        {basic_info.description[0]}
        <br />
        {basic_info.description[1]}
        <br />
        {basic_info.description[2]}
        <br />
        {basic_info.description[3]}
      </motion.p>
      <Link href="#about">
        <motion.p
          whileHover={{
            scale: 1.1,
            textShadow: "1px 2px 2px black",
          }}
        >
          Algo mas sobre mi ►
        </motion.p>
      </Link>
    </div>
  );
};

export default Hero;
