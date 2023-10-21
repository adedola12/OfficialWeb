"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'

import { TitleText, TypingText } from "../components"
import { slideIn, staggerContainer } from "../utils/motion"

const Contact = () => {
  const formRef = useRef()

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_hs929xh',
      'template_uswfm7k',
      {
        form_name: form.name,
        to_name: 'ADLM Studio',
        form_email: form.email,
        to_email: 'admin@adlmstudio.net',
        message: form.message
      },
    )
    .then(() => {
      setLoading(false)
      alert('Thank you, i will get back to you as soon as possible')

      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false)

      console.log(error)
      alert('Something went wrong.')
    })
  }

  return (
    <section className='xl:mt-12 xl:max-w-[60vw] sm:pl-16 pl-6 p-3 flex-col-reverse flex gap-10 overflow-hidden '>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25}}
      >
        <TypingText title="Contact" textStyles="text-center"/>
        <TitleText title="Get in touch" />
      <motion.div 
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] p-8 rounded-2xl bg-[rgba(0,0,0,0.2)] items-center"
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Whats your name?"
              className="py-4 px-6 placeholder:text-secondary-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="py-4 px-6 placeholder:text-secondary-white rounded-lg outline-none border-none font-medium"
             />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea 
              row='9'
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Input your Message"
              className="py-4 px-6 placeholder:text-secondary-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-sky-900 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary-black rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
