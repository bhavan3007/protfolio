import { motion } from "framer-motion";
import { styles } from "../styles";
import computerImg from "../assets/com.jpeg"; // Ensure the image path is correct

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto flex flex-col justify-start items-center">
      {/* Top content */}
      <div className={`${styles.paddingX} mt-32 w-full max-w-7xl flex flex-col items-start`}>
        {/* Dot and line + Text */}
        <div className="flex flex-row gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Bhavan</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Building smart solutions with code,
              <br className="sm:block hidden" />
              driven by logic and creativity.
            </p>
          </div>
        </div>

        {/* Animated Image below text */}
        <div className="w-full flex justify-center mt--5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-gradient-to-br from-[#1f1f2e] to-[#1a1a2e] rounded-xl shadow-lg p-4"
          >
            <img
              src={computerImg}
              alt="computer"
              className="w-[400px] sm:w-[550px] h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-20 bottom-32 w-full flex justify-center items-center mt-10">
        <a href="#about">
          <div className="w-[35px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
