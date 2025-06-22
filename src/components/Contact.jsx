import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="px-4 sm:px-6 md:px-8 mt-20 w-full flex justify-center">
      <div className="max-w-fit w-full">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>Contact</h2>
        </motion.div>

        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 bg-tertiary p-6 sm:p-8 rounded-2xl text-white space-y-6 shadow-md shadow-primary cursor-grab active:cursor-grabbing"
        >
          {/* Email */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <MdEmail className="text-2xl text-white" />
            <div>
              <h3 className="text-lg font-semibold">Email:</h3>
              <p className="text-secondary break-all">
                bhavan.mca2024@adhiyamaan.in | bbhavan3007@gmail.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <MdPhone className="text-2xl text-white" />
            <div>
              <h3 className="text-lg font-semibold">Phone:</h3>
              <p className="text-secondary">+91 76038 27022</p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <FaLinkedin className="text-2xl text-white" />
            <div>
              <h3 className="text-lg font-semibold">LinkedIn:</h3>
              <a
                href="https://www.linkedin.com/in/bhavan3007/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary underline hover:text-white break-all"
              >
                linkedin.com/in/bhavan
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <FaGithub className="text-2xl text-white" />
            <div>
              <h3 className="text-lg font-semibold">GitHub:</h3>
              <a
                href="https://github.com/bhavan3007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary underline hover:text-white break-all"
              >
                github.com/bhavan
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
