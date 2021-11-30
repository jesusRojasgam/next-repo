import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer
      className="footer"
      initial={{ opacity: 0, y: 8 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 2,
          ease: [0.61, 1, 0.88, 1],
        },
      }}
    >
      <motion.a
      initial={{ opacity: 0, y: 8 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 3,
          ease: [0.61, 1, 0.88, 1],
        },
      }}
        whileHover={{
          scale: 1.5,
        }}
        href="https://github.com/jesusRojasgam"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <Image
            src="/icons/icons8-github-100.png"
            alt="GitHub Logo"
            width={28}
            height={28}
          />
        </span>
      </motion.a>
      <motion.a
        initial={{ opacity: 0, y: 8 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 3,
          ease: [0.61, 1, 0.88, 1],
        },
      }}
        whileHover={{
          scale: 1.5,
        }}
        href="https://www.linkedin.com/in/jesus-rojas-gamboa-195a04224/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <Image
            src="/icons/icons8-linkedin-circled-48.png"
            alt="LinkedIn Logo"
            width={28}
            height={28}
          />
        </span>
      </motion.a>
    </footer>
  );
};

export default Footer;
