import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import info from "../../db/db.json";

const { basic_info } = info;

const Nav = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 2,
          ease: [0.61, 1, 0.88, 1],
        },
      }}
    >
      <nav>
        <Link href="#about">
          <motion.h2
            whileHover={{
              scale: 1.1,
              textShadow: "1px 2px 2px black",
            }}
          >
            {basic_info.section_name.about}
          </motion.h2>
        </Link>
        <Link href="#projects">
          <motion.h2
            whileHover={{
              scale: 1.1,
              textShadow: "1px 2px 2px black",
            }}
          >

           {basic_info.section_name.contact}
          </motion.h2>
        </Link>
      </nav>
    </motion.header>
  );
};

export default Nav;
