import { motion } from "framer-motion";

function FadeInWrapper({
  children,
  initialOpacity,
  initialY,
  opacity,
  y,
  duration,
}) {
  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 10 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   exit={{ opacity: 0, y: -10 }}
    //   transition={{ duration: 0.6 }}
    // >
    //   {children}
    // </motion.div>
    <motion.div
      initial={{ opacity: initialOpacity, y: initialY }}
      animate={{ opacity: opacity, y: y }}
      transition={{ duration: duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWrapper;
