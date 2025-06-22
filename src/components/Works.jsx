import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constnts";
import { github } from "../assets";

const Works = () => {
  return (
    <div className="ml-20 mr-10"> {/* Adds left margin to all content */}
      <motion.div>
        <p className={styles.sectionSubText}>Here What I Completed Projects</p>
        <h2 className={styles.sectionHeadText}>Works</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <Tilt
            key={index}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
          >
            <motion.div>
              <div className="relative w-full h-[230px]">
                
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div
                    onClick={() =>
                      window.open(project.source_code_link, "_blank")
                    }
                    className="black-gradient w-20 h-20 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={github}
                      alt="github"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">
                  {project.name}
                </h3>
                <p className="mt-2 text-secondary text-[14px]">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                    #{tag.name}
                  </p>
                ))}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Works;
