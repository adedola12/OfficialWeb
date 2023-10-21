'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import { footerVariants } from '../utils/motion';

const currentDate = new Date ();
const currentYear = currentDate.getFullYear ();

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="relative sm:pl-16 pl-6 p-3 py-8"
  >
    <div className="footer-gradient" />

    <div className="mx-auto flex flex-col gap-8">
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[54px] text-[44px] text-white">
          {' '}Get Started With Our Courses
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-sky-900 rounded-[32px] gap-[12px]"
          onClick={() => {
            window.location.href = 'https://adlmcourse.vercel.app/';
          }}
        >
          <span className="font-normal text-[16px] text-white">Enroll Now</span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">ADLM Studio</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright {currentYear} ADLMStudio. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map (socials => (
              <img key={socials.name} src={socials.url} alt={socials.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
