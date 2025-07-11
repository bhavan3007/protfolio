import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constnts";
import { SectionWraper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard=({experience}) =>(
  <VerticalTimelineElement
  contentStyle={{background:'#1d1836',color:'#fff'}}
  contentArrowStyle={{borderRight:'7px solid #2322631'}}
  date={experience.date}
  iconStyle={{background:experience.iconBg}}
  icon={
    <div className="flex justify-center items-center w-full h-full">

    </div>
  }
  >
   <div>
    <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
    <p className="text-secondary text-[16px] font-semibold" style={{marin:0}}>{experience.company_name}</p>
   </div>
   <ul className="mt-5 list-disc ml-5 space-y-2">
    {experience.points.map((point,index)=>
    <li
    key={`experience-point-${index}`}
    className="text-white-100 text-[14px] pl-1 tracking-wider"
    >
      {point}

    </li>
    )}

   </ul>

  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I have done so far</p>
      <h2 className={styles.sectionHeadText}>Hackathons </h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience,index)=>
        (
          <ExperienceCard key={index} experience= {experience}/>
        )
        )}
      </VerticalTimeline>
    </div>
    </>
  );
};

export default SectionWraper(Experience,"work") ;
