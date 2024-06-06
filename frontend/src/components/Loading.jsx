import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <motion.div
        className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
        style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)" }}
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <p className="text-gray-700 text-lg mt-4">Loading...</p>
    </div>
  );
};

export default Loading;
