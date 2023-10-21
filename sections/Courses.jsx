"use client"

import { motion } from "framer-motion"
import { TypingText } from "../components"
import CourseCard from "../components/CourseCard"
import { staggerContainer } from "../utils/motion"
import { courses } from "../constants"
import { useState } from "react"
import { SectionWrapper } from "../hoc"

const Courses = () => {
  const [active, setActive] = useState(false)

  return (
    <section className='sm:pl-16 pl-6 p-3'>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show" // Added animation
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className="mx-auto flex flex-col pt-2 mt-9"
      >
        <TypingText title="Our Courses" textStyles="text-center"/>
        
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {courses.map((course, index) => (
            <CourseCard 
              key={course.id}
              {...course}
              index={index}
              active={active}
              handleClick={setActive}
            />
          )) }
        </div>
      </motion.div>
    </section>
  )
}

export default SectionWrapper(Courses, 'Courses')
