import { Footer, Navbar } from '../components';
import { About, BlogPost, Contact, Courses, Faq, GetStarted, Hero, Testimonials } from '../sections';

const Page = () => {
  return(
  <div className='bg-sky-800 overflow-hidden'>
    <Navbar />
    <Hero />
    <div className='relative'>
    <div className='mb-[50px] h-[2px] bg-white opacity-10'/>
    <About />
    <div className='gradient-03 z-0'/>
    <Courses />
    </div>
    <div className='relative'>
    <Testimonials />
    <div className='gradient-02 z-0'/>
    <BlogPost />
    </div>
    <div>
    <GetStarted />
    <Contact />
    <div className='gradient-02 z-0'/>
    <Faq />
    </div>
    <Footer />
  </div>
  )
};

export default Page;
``