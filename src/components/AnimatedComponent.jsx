import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};
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
  duration: 0.175,
};

const AnimatedComponent = (props) => {
  return (
    <motion.div variants={animations} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
      {/* <motion.div style={pageStyle} initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}> */}
      {props.children}
    </motion.div>
  );
};

export default AnimatedComponent;
