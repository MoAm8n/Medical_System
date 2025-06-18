import React from 'react'
import { aboutData } from '../data/dummy'
import { FaRegPlayCircle } from "react-icons/fa";

const About = () => {
  return (
    <section className='py-12 bg-white'>
      <div className="container mx-auto px-10">
        <div className='flex items-center'>
          <div className='flex items-center lg:justify-between max-lg:flex-col'>
              <div className='w-full lg:w-2/4'>
              <p className='text-3xl font-bold pb-8'>{aboutData.aboutPage.aboutUs.title}</p>
              <p className='pb-4 text-xl leading-10' style={{color: aboutData.aboutPage.aboutUs.colors.text}}>{aboutData.aboutPage.aboutUs.description}</p>
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
        <div className="space-y-8 my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutData.aboutPage.sections.slice(0, 2).map((item, index) => (
              <div 
                key={index} 
                className="w-full h-[340px] bg-[#FFFAF1] p-8 flex flex-col items-center justify-center text-center"
              >
                <span className="text-5xl text-[#887856]">{item.icon}</span>
                <h2 className="text-2xl font-bold text-[#887856] mt-4">{item.title}</h2>
                {item.description && (
                  <p className="text-lg text-[#211B0D] mt-4 px-4">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
          {aboutData.aboutPage.sections.length > 2 && (
            <div className="w-full bg-[#FFFAF1] p-8 rounded-xl shadow-sm">
              <div className="flex flex-col items-center text-center mb-8">
                <span className="text-5xl text-[#887856]">
                  {aboutData.aboutPage.sections[2].icon}
                </span>
                <h2 className="text-2xl font-bold text-[#887856] mt-4">
                  {aboutData.aboutPage.sections[2].title}
                </h2>
                {aboutData.aboutPage.sections[2].description && (
                  <p className="text-lg text-[#211B0D] mt-4 max-w-2xl mx-auto">
                    {aboutData.aboutPage.sections[2].description}
                  </p>
                )}
              </div>
              {aboutData.aboutPage.sections[2].skills && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {aboutData.aboutPage.sections[2].skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex flex-col items-center p-4"
                    >
                      <img 
                        src={skill.image} 
                        alt={skill.title}
                        className="w-16 h-16 object-contain mb-3"
                      />
                      <p className="sm:text-lg max-sm:text-[10px] text-[#211B0D] text-center font-medium">
                        {skill.title}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default About