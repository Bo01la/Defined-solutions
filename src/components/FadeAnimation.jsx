import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const paragraphs = [
  "Defined Solutions is a leading professional services provider in KSA and positioned to be an extended technical arm for the most well-known players in the market with an extensive portfolio of delivered projects and satisfied customers.",
  "At Defined Solutions, our core focus is on professional and managed services, with services business model focusing on vendors, partners and distis.",
  "Our engagement model is through vendors or their partners, as we don't deal with the end-customer directly. However, we have solid relationships with end-customers where we often provide consultancy and support services.",
  "We take pride in delivering high-quality IT solutions to our clients, and we have a team of experts who work closely with them to understand their unique business needs and challenges.",
  "Our services include but are not limited to implementation, migration, managed services, and project management.",
  "We have a proven track record of delivering successful projects and exceeding our client's expectations.",
];

function FadeAnimation() {
  const [index, setIndex] = useState(0);

  //paragraph animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === paragraphs.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5 }}
          className="p-2 lg:px-40 h-[200px] md:[400px] text-center text-lg tracking-wide text-white/80"
        >
          {paragraphs[index]}
        </motion.p>
      </AnimatePresence>
      <div className="flex items-center content-center gap-1">
        <div
          className={`h-2 w-2 border-1  rounded-full ${
            index === 0
              ? "bg-gradient-to-r from-primary to-secondary"
              : "border-white"
          }`}
        ></div>
        <div
          className={`h-2 w-2 border-1  rounded-full ${
            index === 1
              ? "bg-gradient-to-r from-primary to-secondary"
              : "border-white"
          }`}
        ></div>
        <div
          className={`h-2 w-2 border-1  rounded-full ${
            index === 2
              ? "bg-gradient-to-r from-primary to-secondary"
              : "border-white"
          }`}
        ></div>
        <div
          className={`h-2 w-2 border-1  rounded-full ${
            index === 3
              ? "bg-gradient-to-r from-primary to-secondary"
              : "border-white"
          }`}
        ></div>
        <div
          className={`h-2 w-2 border-1  rounded-full ${
            index === 4
              ? "bg-gradient-to-r from-primary to-secondary"
              : "border-white"
          }`}
        ></div>
        <div
          className={`h-2 w-2 border-1  rounded-full ${
            index === 5
              ? "bg-gradient-to-r from-primary to-secondary"
              : "border-white"
          }`}
        ></div>
      </div>
    </>
  );
}

export default FadeAnimation;