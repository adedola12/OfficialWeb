'use client';

import { motion } from "framer-motion";
import styles from '../styles'
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section className={`sm:pl-16 pl-6 p-3`}>
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        viewport={{once: false, amount: 0.25}}
        className={`pt-[60px] mx-auto flex flex-col`}
      >
        <div>
          <motion.h1
            variants={textVariant(1.1)}
            className={styles.heroHeading}
          >
            Empowering Construction Professionals with
            <br className="mx-md:hidden" />
            <span>
              BIM Tools
            </span>
          </motion.h1>
        </div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:mt-[20px] mt-[12px]"
        >
          <div className="w-full h-[500px] hero-gradient rounded-tl-[140px]-top-[30px]">
            <img
              src="/cover.png"
              alt="cover"
              className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative blur"
            />
          </div>
        </motion.div>

        <div>
        <motion.p
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="font-bold text-white text-[20px] justify-start pt-5 lg:p-5 lg:text-center"
        >
          We are committed to transforming the construction industry through the power of knowledge and innovation. We stand as a leading institution, specializing in Building Information Modeling (BIM) and Construction Technology. Our mission is clear: to empower construction professionals and organizations with the skills and expertise they need to thrive in a technology-driven world.
        </motion.p>
        </div>
        
        <div>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex justify-center pt-5 items-center"
        >
          <button
            type="submit"
            className="bg-blue-700 text-white rounded-md font-bold px-2 py-2"
            onClick={() => {
              window.location.href = "https://adlmcourse.vercel.app/"
            }}
          >
            Enroll now
          </button>
        </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
