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

function Home() {
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
      <section className="flex flex-col pt-20 lg:px-35 h-screen ">
        <h1 className="pb-2 text-center text-4xl lg:text-5xl font-bold tracking-wide flex flex-col gap-1">
          WHO WE ARE <span>We Are A Team Of Top-Notch Service </span>
          <span>Providears</span>
        </h1>

        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5 }}
            className="p-2 lg:px-40 text-center text-lg tracking-wide text-white/80"
          >
            {paragraphs[index]}
          </motion.p>
        </AnimatePresence>
        <div>{/*buttons */}</div>
        <div>{/*section navigator on lg only */}</div>
      </section>
    </>
  );
}

export default Home;
