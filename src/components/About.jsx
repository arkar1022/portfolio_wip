import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


import { certificates } from "../constants";

import "./swiperStyle.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Tech from "./Tech";

const CertificateCard = ({index, certificate}) => {
  return (
    <div className="w-full p-[30px]">
      <Tilt className="w-full">
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className='w-[full] green-pink-gradient p-[5px] rounded-[20px]'
        >
          <img src={certificate.image} className="w-full rounded-[20px]" />
        </motion.div>
      </Tilt>
    </div>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Who Am I ?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 font-work-sans text-secondary text-[17px] md:text-[20px] max-w-4xl leading-[30px]'
      >
        I am a graduating student from JCUS with a strong passion for Web Development and Artificial Intelligence.
        Over the past two years, I have gained extensive experience in frontend development,
        specializing in React.js and Next.js, and have worked with
        Django for backend development. Currently, I am expanding
        my expertise in AI and Machine Learning.

      </motion.p>
      <div className="mt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay= {{
            delay: 5000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1800: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          {
            certificates.map((certificate, index) => (
              <SwiperSlide key={index}>
              <CertificateCard index={index} certificate={certificate}/>
            </SwiperSlide>
            ))
          }

        </Swiper>

      </div>
      <Tech />
    </>
  );
};

export default SectionWrapper(About, "about");
