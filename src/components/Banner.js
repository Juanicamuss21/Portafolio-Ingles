import React from 'react';
import {Link } from 'react-router-dom';
import Image from "../assets/img-juani.png"
import {FaGithub, FaLinkedin} from "react-icons/fa"
import {SiGmail} from "react-icons/si"
import { TypeAnimation } from 'react-type-animation';
// import {motion} from "framer-motion"
// import {fadeIn} from "../variants"
import CV from "../assets/Curriculum Vitae.pdf"

const Banner = () => {

  return <section className='section flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          {/* <motion.h1 
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.7}} */}
          <h1 className='text-[50px] font-bold leading-[0.8] lg:text-[60px]'> 
            Juan Ignacio Camus
          </h1> 
          {/* <p>
            HTML | CSS | Javascript | Typescript | React | Redux | TailwindCSS | NodeJS | ExpressJS | PostgreSQL | MongoDB | 
          </p> */}
          {/* </motion.h1> */}
          {/* <motion.div 
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.7}}
          className='my-4 text-[36px] lg:text-[36px] font-secondary font-semibold uppercase leading-[1]'> */}
          <div className='my-4 text-[36px] lg:text-[36px] font-secondary font-semibold uppercase leading-[1]'>
            <span className= 'text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Designer',
              2000,
            ]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}/>
          </div>
          {/* </motion.div> */}
            
          {/* <motion.p 
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.7}} >*/}
          {/* </motion.p> */}
        
          <p className='mb-8 max-w-lg mx-auto lg:mx-0'> 
            Welcome to my web portfolio! My goal is to show you a variety of work I've done as a web developer, as well as information about myself. My skills include website design and development, API integration, and search engine optimization. I hope this portfolio helps you understand the wide range of services I offer as a web developer and gives you the confidence to contact me for your future projects. Thanks for the visit!.
          </p>
          {/* <motion.div 
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.7}}
          className='flex gap-x-6 max-w-max items-center mb-12 mx-auto lg:mx-0'> */}
          <div className='flex gap-x-6 max-w-max items-center mb-12 mx-auto lg:mx-0'>
            <Link to='contact' smooth={true}>
            <button className='btn btn-sm'>Contact me</button>
            </Link>
            <button className='btn btn-sm'>
              <a href={CV} download >Download CV</a>
            </button>
          </div>
          {/* </motion.div>  */}
          <div className='flex text-[30px] gap-x-6 max-w-max mx-auto lg:ml-0 cursor-pointer'>
          <Link to="https://github.com/Juanicamuss21">
              <SiGmail/>
          </Link>
          <Link to="https://github.com/Juanicamuss21">
              <FaGithub/>
          </Link>
          <Link to="https://www.linkedin.com/in/juan-ignacio-camus-703102251/">
              <FaLinkedin/>
          </Link>
          </div>
        </div>
        {/* <motion.div 
        variants={fadeIn('down', 0.5)}
        initial='hidden'
        whileInView={'show'}
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[380px] lg:mr-24'> */}
        <div className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[380px] lg:mr-24'>
          <img className='rounded-full' src={Image} alt=""/>       
        </div>
        {/* </motion.div> */}
      </div>
    </div>
  </section>;
};

export default Banner;
