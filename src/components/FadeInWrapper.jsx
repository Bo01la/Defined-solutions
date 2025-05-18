import { motion } from "framer-motion";

function FadeInWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWrapper;
