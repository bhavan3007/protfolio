import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constnts';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWraper } from '../hoc';

const Servicecard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      {/* 👇 Add your image here */}
      <motion.img
        src="/bhavanphoto.jpg"
        alt="Bhavan"
        variants={fadeIn("", "", 0.1, 1)}
        className="w-40 h-40 rounded-full object-cover mt-5 ml-20"
      />

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m Bhavan B, a passionate and aspiring full-stack developer currently pursuing my Master
        of Computer Applications at Adhiyamaan College of Engineering. With a solid foundation in
        mathematics and a growing proficiency in technologies like Python, React JS, Node.js, and
        SQL/NoSQL databases, I’m driven by a deep interest in building practical, scalable
        solutions.
        <br />
        <br />
        My academic background, hands-on projects like PathFinder Pro and WayToDay, and
        participation in hackathons and tech conferences reflect my commitment to continuous
        learning and innovation. I enjoy tackling challenges in full-stack development and data
        science, and I aim to contribute meaningfully to tech-driven industries.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <Servicecard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWraper(About, "about");
