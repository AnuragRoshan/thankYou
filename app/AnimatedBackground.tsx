"use client";

import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <motion.div
      className="fixed inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600" />
      <motion.div
        className="absolute inset-0 opacity-50"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 20 }}
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.2" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
    </motion.div>
  );
};

export default AnimatedBackground;
