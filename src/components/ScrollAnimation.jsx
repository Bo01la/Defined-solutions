import { motion } from "framer-motion";

const logos = [
  "/assets/images/LOGO-Cisco.png",
  "/assets/images/LOGO-Hewlett.png",
  "/assets/images/LOGO-Huwawei.png",
  "/assets/images/LOGO-Microsoft.png",
  "/assets/images/LOGO-Nutanix.png",
  "/assets/images/LOGO-Paloalto.png",
  "/assets/images/LOGO-Veeam.png",
  "/assets/images/LOGO-Vmware.png",
  "/assets/images/LOGO-Vyopta.png",
  // repeated
  "/assets/images/LOGO-Cisco.png",
  "/assets/images/LOGO-Hewlett.png",
  "/assets/images/LOGO-Huwawei.png",
  "/assets/images/LOGO-Microsoft.png",
  "/assets/images/LOGO-Nutanix.png",
  "/assets/images/LOGO-Paloalto.png",
  "/assets/images/LOGO-Veeam.png",
  "/assets/images/LOGO-Vmware.png",
  "/assets/images/LOGO-Vyopta.png",
];

function ScrollAnimation() {
  return (
    <div className="w-full overflow-hidden ">
      <motion.div
        className="flex gap-4"
        animate={{ x: ["0px", "-2019px"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {logos.map((src, i) => (
          <div
            key={i}
            className="h-32 w-52 bg-white flex justify-center items-center rounded-3xl shrink-0"
          >
            <img src={src} alt={`logo ${i}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default ScrollAnimation;
