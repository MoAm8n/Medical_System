import React from 'react'
import {NavLink} from 'react-router-dom'
import {HeaderBody} from '../../Components'
import {Services2} from '../../data/dummy'
const Services = () => {
  return (
    <section className='container mx-auto px-4 sm:px-6 py-8'>
      <HeaderBody title="الخدمات" description="إليكم مجموعة من الخدمات التى يقدمها مركز الرعاية الطبى" button="المزيد" location='/خدماتنا' />
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-2'>
        {Services2.slice(0, 10).map((item) => (
          <NavLink to={item.location || '#'}>
            <div className='box bg-white w-full h-64 p-2 text-center flex flex-col items-center justify-center gap-4 cursor-pointer' key={item.title}>
              <p className='w-16 h-16 flex justify-center items-center rounded-full text-3xl' style={{background: '#FCF5E8', color: '#887856'}}>{item.icon}</p>
              <h2 className='text-base font-bold' style={{color: '#211B0D'}}>{item.title}</h2>
              <p className='text-xs font-normal' style={{color: '#787878'}}>{item.dec}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  )
}

export default Services