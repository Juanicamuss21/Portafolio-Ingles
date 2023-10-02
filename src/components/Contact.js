import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import { toast, Toaster } from 'react-hot-toast'
// import {motion} from "framer-motion"
// import {fadeIn} from "../variants"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_vumsxww', 'template_o6zq5pf', form.current, '4U9cfwaK154485vNs')
      .then((result) => {
        toast.success('Mensaje enviado')
      }, (error) => {
        toast.error(error.text)
      })

    e.target.reset()
  }

  return <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        {/* <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        animate='show'
        viewport={{once: false, amount:0.3}}
        className='flex-1 flex justify-start items-center'> */}
        <div className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Text in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
              Lets work<br/>together!
            </h2>
          </div>
        </div>
        {/* </motion.div> */}
        {/* form */}
        {/* <motion.form 
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount:0.3}}
        className='flex-1 border rounded-xl flex flex-col gap-y-6 pb-24 p-6 items-start'> */}
        <form ref={form} onSubmit={sendEmail} className='flex-1 border rounded-xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
          <input
          className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
          type='text'
          placeholder='Your name'
          required>
          </input>       
          <input
          className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
          type='text'
          placeholder='Your email'
          required/>
          <textarea
          className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
          placeholder='Your message'
          required></textarea>
          <button type='submit' className='btn btn-lg'>Send message</button>
        {/* </motion.form>*/}
        </form>                                   
      </div>
    </div>

    <Toaster
                position='bottom-right'
                reverseOrder={true}
                toastOptions={{
                  className: '',
                  duration: 3000,
                  style: {
                    background: '#363636',
                    color: 'white',
                    fontSize: '15px'
                  }
                }}
              />
    </section>;
};

export default Contact;
