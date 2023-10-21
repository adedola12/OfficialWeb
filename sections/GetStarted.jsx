"use client"

import { motion } from "framer-motion"
import { StartSteps, TitleText, TypingText } from "../components"
import { fadeIn, staggerContainer } from "../utils/motion"
import { startingFeatures } from "../constants"
import { SectionWrapper } from "../hoc"

const GetStarted = () => {
  return (
    <section className="sm:pl-16 pl-6 p-3 relative ">
        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25}}
        >
            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] flex justify-center flex-col"
            >
                <TypingText title="How Our Courses Work"/>
                <TitleText title={<>Get started with just a few clicks</>}/>
                <div className="mt-[31px] flex flex-col max-w gap-[24px]">
                    {startingFeatures.map((feature, index) => (
                        <StartSteps 
                            key={feature}
                            number={index + 1}
                            text={feature}
                        />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default SectionWrapper(GetStarted, "getstarted")
