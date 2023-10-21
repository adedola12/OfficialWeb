"use client"

import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion"
import { TypingText } from "../components"
import { useState } from "react"
import { SectionWrapper } from "../hoc"

const Testimonials = () => {
  //Add an Input section Upon SignIn
  const [signIn, setSignIn ] = useState(false)

  return(
  <section className="sm:pl-16 pl-6 p-3">
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mx-auto flex lg:flex-row flex-col gap-6"
    >

      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[gray] relative"
      >
      <div className="feedback-gradient"/>
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
          {/* Names will be called from DB */}
            Name
          </h4>
          <p className="mt-[8px] font-normal sm:text-[16px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
          {/* Position will be called from DB */}
            Position
          </p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        {/* Dynamic Feedback from DB */}
          Feedback
        </p>
        {/* Add a feedBack Courasel */}
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center "
      >
      <img 
      // Dynamic Image Source
        src="/planet-09.png"
        alt="Site Image"
        className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[48px]"
      />
        
      </motion.div>
    </motion.div>
  </section>
  )
}

export default SectionWrapper(Testimonials, 'Testimonials')
