import React from "react";
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";
const Experience = ({ experience, basic_info }) => {
  return (
    <Slide duration={4000} direction="right">
      <div>
        <div className="experience">
          <motion.h2
            whileHover={{
              scale: 1.1,
              textShadow: "1px 2px 2px black",
            }}
          >
            {basic_info.section_name.experience}
          </motion.h2>
          {experience.map((item) => {
            return (
              <motion.div
                className="experience__card"
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
                  scale: 1.2,
                }}
                key={JSON.stringify(item)}
              >
                <p className="name">🖥️ {item.company}</p>
                <p>{item.title}</p>
                <p>{item.years}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
};

export default Experience;
