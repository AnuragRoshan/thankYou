"use client";

import { motion } from "framer-motion";
import { inter, pacifico } from "./Font";
import AnimatedBackground from "./AnimatedBackground";
import PayPalLogo from "./PaypalLogo";

export default function ThankYouPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${inter.className}`}
    >
      <AnimatedBackground />
      <motion.div
        className="text-center z-10 bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 shadow-lg"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className={`text-6xl mb-6 text-white ${pacifico.className}`}
          variants={itemVariants}
        >
          Thank You!
        </motion.h1>
        <motion.p className="text-xl mb-8 text-white" variants={itemVariants}>
          Your PayPal payment was successful.
        </motion.p>
        <motion.div
          className="flex justify-center" // Center the PayPalLogo
          variants={itemVariants}
        >
          <PayPalLogo />
        </motion.div>
        {/* <motion.button
          className="mt-8 px-6 py-3 bg-white text-blue-600 rounded-full text-lg hover:bg-blue-50 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
        >
          Back to Home
        </motion.button> */}
      </motion.div>
    </div>
  );
}
