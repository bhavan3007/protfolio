// Tech.jsx
import React from 'react';
import { motion } from 'framer-motion';

import { technologies } from '../constnts';
import { SectionWraper } from '../hoc';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Some Known Techs</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>

      <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="w-28 h-28 flex items-center justify-center bg-tertiary rounded-full shadow-lg"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-16 h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWraper(Tech, '');
