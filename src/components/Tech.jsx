import React, { useState, useEffect } from "react";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const Tech = () => {
  return (
    <div className='flex mt-20 flex-row flex-wrap justify-center gap-10'>

      {technologies.map((technology, index) => (
        <motion.div
          variants={fadeIn("right", "spring", index * 0.15, 0.75)}
        >
          <img key={index} style={{ borderImage: "linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%)", borderImageSlice: 1 }}
            className="w-20 p-2 h-20 rounded-full border-4" src={technology.icon} />
        </motion.div>
      ))}
    </div>
  );
};

export default Tech;
