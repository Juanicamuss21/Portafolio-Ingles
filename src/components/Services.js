import React from 'react';
// import {BsArrowUpRight} from "react-icons/bs"
// import {motion} from "framer-motion"
// import {fadeIn} from "../variants"

const services = [
  {
    name: "Front-End", 
    description: "HTML, CSS, JAVASCRIPT, TYPESCRIPT, REACT, REDUX, NEXTJS 13, TAILWIND CSS",
    link:"Learn more"
  },
  {
    name: "Back-End", 
    description: "NODEJS, EXPRESSJS",
    link:"Learn more"
  },
  {
    name: "Bases de Datos", 
    description: "POSTGRE SQL, SEQUELIZE, MONGODB",
    link:"Learn more"
  }
  
]

const Services = () => {
  return <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        animate='show'
        viewport={{once: false, amount:0.3}}
        className='flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten
         mb-12 lg:mb-0 flex flex-col justify-center items-start'> */}
         <div className='flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten
         mb-12 lg:mb-0 flex flex-col justify-center items-start'>
          <h2 className='h2 text-accent mb-6'>What i do.</h2>
          <h3 className='h3 max-w-[455px] mb-16 '> I am a Full Stack Developer with over 1 year of experience.</h3>
          <button className='btn btn-sm'>
            <a href='https://github.com/Juanicamuss21' target="_blank" rel='noreferrer'>
            See my work
            </a>
          </button>
         </div>

        {/* </motion.div> */}
        {/* <motion.div 
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        animate='show'
        viewport={{once: false, amount:0.3}}
        className='flex-1'> */}
        
        <div className='flex-1'>
        
          <div>
            {
              services.map((service, index) => {
                const {name, description} = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                    {/* <a href='/' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <BsArrowUpRight/>
                    </a>
                    <a href='/' className='text-gradient text-sm'>
                        {link}
                    </a> */}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        {/* </motion.div> */}
      </div>
    </div>
  </section>;
};

export default Services;
