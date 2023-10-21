"use client"

import { motion } from "framer-motion"
import { TitleText, TypingText } from "../components"
import { staggerContainer } from "../utils/motion"
import { blog } from "../constants"
import BlogCard from "../components/BlogCard"
import { SectionWrapper } from "../hoc"

const BlogPost = () => {
  return (
    <section className="sm:pl-16 pl-6 p-3">
      <motion.div 
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once:false, amount: 0.25}}
        style={`mx-auto flex flex-col`}
      >
        <motion.div>
          <TypingText title='Latest Post' textStyles="text-center"/>
          <TitleText title='Latest News at ADLM Studio' textStyles="text-center"/>
          <div className="mt-[50px] flex flex-col gap-[30px]">
            {blog.map((blog, index) => (
              <BlogCard
                key={`ADLMBlog-${index}`}
                {...blog}
                index={index +1}
               />
            ))}    
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default SectionWrapper (BlogPost, 'Blog')
