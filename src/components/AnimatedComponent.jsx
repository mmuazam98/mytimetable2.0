import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.25,
};

const AnimatedComponent = (props) => {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}>
      {props.children}
    </motion.div>
  );
};

export default AnimatedComponent;
