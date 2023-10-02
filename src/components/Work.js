import React from 'react';
import { useState } from 'react';
import ModalImg from "../components/Modals/ModalImg"
import Carrousel from "../components/Carrousel/Carrousel"

// Imagenes Portafolio Español
import BannerImg from "../assets/proyectos/Portafolio-img-español/img1.png"
import AboutImg from "../assets/proyectos/Portafolio-img-español/img2.png"
import ExperienceImg from "../assets/proyectos/Portafolio-img-español/img3.png"
import SkillsImg from "../assets/proyectos/Portafolio-img-español/img4.png"
import ProjectsImg from "../assets/proyectos/Portafolio-img-español/img5.png"
import ProjectsImg2 from "../assets/proyectos/Portafolio-img-español/img6.png"
import ContactImg from "../assets/proyectos/Portafolio-img-español/img7.png"
import FooterImg from "../assets/proyectos/Portafolio-img-español/img8.png"


// Imagenes proyecto final dreams factory
import LandingPf from "../assets/proyectos/DreamsFactory-img/img1.png";
import HomePf1 from "../assets/proyectos/DreamsFactory-img/img2.png";
import HomePf2 from "../assets/proyectos/DreamsFactory-img/img3.png";
import HomePf3 from "../assets/proyectos/DreamsFactory-img/img4.png";
import FavoritesPf from "../assets/proyectos/DreamsFactory-img/img5.png";
import LoginPf from "../assets/proyectos/DreamsFactory-img/img6.png";
import CartPf from "../assets/proyectos/DreamsFactory-img/img7.png";
import FiltersPf from "../assets/proyectos/DreamsFactory-img/img8.png";
import AboutPf from "../assets/proyectos/DreamsFactory-img/img9.png";
import TerminosPf from "../assets/proyectos/DreamsFactory-img/img10.png";
import PoliticasPf from "../assets/proyectos/DreamsFactory-img/img11.png";
import DetailPf from "../assets/proyectos/DreamsFactory-img/img12.png";
import AccordeonPf from "../assets/proyectos/DreamsFactory-img/img13.png";

// Imagenes de proyecto Courses-App
import LandingCourses from "../assets/proyectos/CoursesApp-img/img1.png"
import LandingCourses2 from "../assets/proyectos/CoursesApp-img/img2.png"
import HomeCourses from "../assets/proyectos/CoursesApp-img/img3.png"
import HomeCourses2 from "../assets/proyectos/CoursesApp-img/img4.png"
import SearchCourse from "../assets/proyectos/CoursesApp-img/img5.png"
import DetailCourse from "../assets/proyectos/CoursesApp-img/img6.png"
import ListCourses from "../assets/proyectos/CoursesApp-img/img7.png"
import menuCourses from "../assets/proyectos/CoursesApp-img/img8.png"
import FormCourses from "../assets/proyectos/CoursesApp-img/img9.png"

const imagenesPortfolio = [BannerImg, AboutImg, ExperienceImg, SkillsImg, ProjectsImg,ProjectsImg2, ContactImg, FooterImg];

const imagenesPf = [LandingPf, HomePf1, HomePf2, HomePf3, FavoritesPf, LoginPf, CartPf, FiltersPf, AboutPf ,TerminosPf, PoliticasPf, DetailPf, AccordeonPf];

const imagenesCoursesApp = [LandingCourses, LandingCourses2, HomeCourses, HomeCourses2, SearchCourse, DetailCourse, ListCourses, menuCourses, FormCourses]

const Work = () => {

  const [openModalPorfolio, setOpenModalPortfolio] = useState(false)
  const [openModalCourses, setOpenModalCourses] = useState(false)
  const [openModalPG, setOpenModalPG] = useState(false)

  return <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 lg:mt-3'>

          <div>
            <h2 className='h2 leading-tight text-accent'>My Latest <br/> Work.</h2>
            <p className='max-w-sm mb-16'>
            Made with the technologies mentioned above and individually as a group.
            </p>
            <button className='btn btn-sm'>
            <a href='https://github.com/Juanicamuss21?tab=repositories' target="_blank" rel='noreferrer'>
            View All Projects
            </a>              
            </button>
          </div>

          <div className='group-relative overflow-hidden border-2 border-white/50 lg:h-[260px] lg:w-[500px] rounded-xl'>

            <div className='img-1 w-full absolute z-40 transition-all duration-300'></div>

            <img className='transition-all duration-500 lg:h-[100%] cursor-pointer' src={imagenesPf[0]} alt="" onClick={()=>setOpenModalPG(true)}/>

            <ModalImg openModal={openModalPG} setOpenModal={setOpenModalPG}>
                <Carrousel images={imagenesPf}/>
            </ModalImg> 

            <div className='absolute -bottom-full left-12 transition-all duration-500 z-50'>
            </div>

          </div>
        </div>
        <div className='flex-1 flex flex-col gap-y-10 mt-[35px]'>
        <div className='group-relative lg:h-[260px] lg:w-[500px]  overflow-hidden border-2 border-white/50 rounded-xl'>

            <div className='img-1 w-full absolute z-40 transition-all duration-300'></div>

            <img className='transition-all duration-500 lg:h-[100%] cursor-pointer' src={imagenesPortfolio[0]} alt="" onClick={()=>setOpenModalPortfolio(true)}/>

            <ModalImg openModal={openModalPorfolio} setOpenModal={setOpenModalPortfolio}>
                <Carrousel images={imagenesPortfolio}/>
            </ModalImg> 

            <div className='absolute -bottom-full left-12 transition-all duration-500 z-50'>
              </div>

          </div>

          <div className='group-relative lg:h-[260px] lg:w-[500px]  overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='img-1 w-full absolute z-40 transition-all duration-300'></div>

            <img className=' transition-all duration-500 lg:h-[100%] cursor-pointer' src={imagenesCoursesApp[0]} alt="" onClick={()=>setOpenModalCourses(true)}/>

            <ModalImg openModal={openModalCourses} setOpenModal={setOpenModalCourses}>
                <Carrousel images={imagenesCoursesApp}/>
            </ModalImg> 

            <div className='absolute -bottom-full left-12 transition-all duration-500 z-50'>
              </div>                                             
          </div>
          

        </div>
      </div>
    </div>
  </section>;
};

export default Work;
