import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import "./swiperStyle.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';


const ProjectCard = ({
  index,
  name,
  description,
  icons,
  image,
  source_code_link,
}) => {
  return (
    <>
      <motion.div variants={fadeIn("right", "spring", index * 0.3, 0.75)} onClick={() => window.open(source_code_link, "_blank")}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:cursor-pointer'
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold font-poppins text-[24px]'>{name}</h3>
            <p className='mt-2 font-work-sans text-secondary text-[14px]'>{description}</p>
          </div>
          <div className="flex mt-2 items-center">
            {icons.map((icon, idx) => (
              <div key={idx} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style={{ transform: `translateX(-${5 * idx * 2}px)` }}>
                <img src={icon} alt={icon} className="p-2" />
              </div>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      {/* <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 mb-[20px] font-work-sans text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
         The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos where available. These projects reflect my ability to solve complex problems, work with different technologies, and manage projects effectively. Some projects were completed during my school days, while others were undertaken in my remote jobs. Although the code from my remote jobs cannot be shared publicly, please feel free to contact me for further insights or discussions about these projects.
        </motion.p>
      </div> */}
      <div className="mt-20 hidden md:flex flex-wrap justify-center items-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="block md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
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
            paddingBottom: "30px",
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide className="flex justify-center items-center" key={index}>  <ProjectCard key={`project-${index}`} index={index} {...project} /> </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
