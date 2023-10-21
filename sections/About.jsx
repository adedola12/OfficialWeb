'use client';

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "../components";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <section className="sm:pl-16 pl-6 p-3">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show" // Added animation
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className="mx-auto flex-col pt-2 mt-9"
      >
        <TypingText title="| About ADLM Studio" textStyles="text-center" />
        <motion.div variants={fadeIn ('right')} className="mt-4">
          <TypingText title="Company Overview" textStyles="text-center" />
          <motion.p className="text-center m-2 font-bold text-white md:text-[18px] sm:text-[14px]">
          ADLM Studio is a pioneering institution in the realm of digital learning and mastery, specializing in Building Information Modeling (BIM) and Construction Technology. Founded by Quasim Mohammed Adedolapo in 2019, ADLM Studio is dedicated to transforming the construction industry through innovative education, expert consultation, and cutting-edge technology solutions.
          <a href="/read-more" className="text-sky-100">Read More</a>
          </motion.p>
        </motion.div>
        <div className='mb-[50px] h-[2px] bg-white opacity-10'/>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="flex about pt-3"
        >
          <motion.p variants={fadeIn ('left', 'tween', 0.2, 1)} className="flex-col-1 justify-center text-white font-bold md:text-[18px] sm:text-[14px] ">
            Dear ADLM Community,
            <br />

            It is with immense pride and a profound sense of purpose that I welcome you to ADLM Studio. This journey began with a vision, a vision that has grown into an enduring commitment to transforming the construction industry.
            <br />

            At ADLM, we believe in the transformative power of knowledge and innovation. We understand that the construction landscape is evolving, driven by technology and collaboration. To thrive in this changing world, one must not just adapt but lead the way. This realization became the foundation of ADLM Studio.
          </motion.p>
          <motion.div variants={fadeIn ('right', 'tween', 0.2, 1)} className="flex-col-1 m-2 w-[500px] h-full">
            <img 
              alt="founder_img"
              src="/planet-09.png"
            />
          </motion.div>
        </motion.div>
        <div className='mb-[50px] h-[2px] bg-white opacity-10'/>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" className="mt-5">
          <TypingText title="Mission and Vision" textStyles="text-center" />
          <motion.p variants={fadeIn('left', 'tween', 0.2, 1)} className="font-bold text-white md:text-[18px] sm:text-[14px] justify-center mt-2">
            To empower construction professionals and organizations with the skills and expertise they need to excel in this technology-driven era. We are not merely educators; we are enablers of dreams and architects of success.
          </motion.p>
        </motion.div>
        <div className='mb-[50px] h-[2px] bg-white opacity-10'/>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" className="mt-5">
          <TypingText title="Our Values" textStyles="text-center" />
          <motion.p variants={fadeIn('left', 'tween', 0.2, 1)} className="font-bold text-white md:text-[18px] sm:text-[14px] justify-center mt-2">
            We are unwavering in our pursuit of excellence. We are committed to delivering the highest standards of education, consultancy, and services. We strive to enable our students and clients to achieve excellence in their endeavors.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(About, 'About');
