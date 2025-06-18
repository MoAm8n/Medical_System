import React from 'react'
import { NavLink } from 'react-router-dom'
import { aboutData } from '../../data/dummy'
import { FaRegPlayCircle } from "react-icons/fa";
import { useStateContext } from '../../contexts/ContextProvider';

const About = () => {
    const { currentColor } = useStateContext()
    return (
        <section className='container mx-auto px-4 sm:px-6 py-28'>
            <div className='flex items-center'>
                <div className='flex items-center lg:justify-between max-lg:flex-col max-sm:gap-8 overflow-hidden'>
                    <div className='w-full lg:w-2/4'>
                    <p className='text-3xl font-bold pb-8'>{aboutData.aboutPage.aboutUs.title}</p>
                    <p className='pb-4 text-xl leading-10' style={{color: aboutData.aboutPage.aboutUs.colors.text}}>{aboutData.aboutPage.aboutUs.description}</p>
                    <NavLink to={`/${aboutData.aboutPage.aboutUs.path}`}>
                        <button className='BtnHome' style={{ background: currentColor, color: aboutData.aboutPage.aboutUs.colors.primary }}>
                        {aboutData.aboutPage.aboutUs.button}
                        </button>
                    </NavLink>
                    </div>
                    <div className='lg:w-2/6 w-3/5 flex relative max-lg:right-16'>
                        <div className='aboutOverlay'>
                            <img src={`${process.env.PUBLIC_URL}/images/image2.png`} alt=""/>
                        </div>
                        <div className='about aboutOverlay'>
                            <img src={`${process.env.PUBLIC_URL}/images/image3.png`} alt=""/>
                            <FaRegPlayCircle className='playAbout'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About