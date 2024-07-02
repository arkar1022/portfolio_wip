import { motion } from "framer-motion";
import myPhoto from "../assets/myphoto.jpeg"
import { styles } from "../styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Hero = () => {

  const handleGitHubClick = () => {
    window.open('https://github.com/arkar1022', '_blank');
  };
  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/arkar-niva/', '_blank');
  };
  const handleEmailClick = () => {
    window.open('https://mailto:arkar1022@gmail.com', '_blank');
  };

  return (
    <section className={`pt-[80px] md:pt-[0px] flex-col-reverse md:px-[50px] justify-start md:justify-center items-center flex md:flex-row relative w-full h-screen gap-8 mx-auto`}>
      <div
        className={`inset-0 flex-1  max-w-7xl  ${styles.paddingX} flex justify-center flex-row items-start gap-5`}
      >
      

        <div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h1 className={`${styles.heroHeadText} tracking-tight font-vt text-[#a3a2a2] `}>
              Hi,I'm <span className={`font-bold text-[#333333] font-vt `}>Ar Kar</span>
            </h1>

            <p className={`${styles.heroSubText} font-poppins font-[300]  mt-2 text-[#4A4A4A]`}>
              A Frontend Developer <br className=' sm:block hidden' />
              <span className=" block font-poppins font-[300]">& an AI Enthusiast</span>
            </p>
          </motion.div>
          <motion.div className="mt-[30px] flex flex-row gap-5 items-center"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <FaGithub onClick={handleGitHubClick} className="hover:opacity-[0.6] hover:cursor-pointer ml-[20px]" size={"30px"} color="#000" />
            <FaLinkedin onClick={handleLinkedinClick} className="hover:opacity-[0.6] hover:cursor-pointer" size={"30px"} color="#000" />
            <SiGmail onClick={handleEmailClick} className="hover:opacity-[0.6] hover:cursor-pointer" size={"30px"} color="#000" />
          </motion.div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex px-[10px] w-full flex-1 justify-center items-center">
        <motion.div
          className="max-w-[500px] max-h-[500px] border-[10px] border-white overflow-hidden flex justify-center items-center"
          animate={{
            borderRadius: [
              "50% 50% 50% 50% / 50% 50% 50% 50%",
              "40% 60% 50% 50% / 60% 40% 60% 40%",
              "60% 40% 60% 40% / 40% 60% 40% 60%",
              "50% 50% 50% 50% / 50% 50% 50% 50%",
            ],
          }}
          transition={{
            duration: 4, // Adjust the duration to make the animation faster
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <img src={myPhoto} className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>

      <div className='md:flex hidden absolute xs:bottom-10 bottom-32 w-full justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
