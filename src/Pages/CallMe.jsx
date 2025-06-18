import React from 'react'
import { NavLink } from 'react-router-dom'
import {HeaderBody} from '../Components'
import {Contact2} from '../data/dummy'
import ImageMap from '../data/map.png'
const CallMe = () => {
    const contactItems = Contact2.filter(item => item.title);
    return (
      <section>
          <div className='container mx-auto px-4 sm:px-6 py-10'>
              <HeaderBody title='إتصل بنا' description='نحن فى إنتظار إستفساراتكم على مدار 24 ساعة' />
          <div className='lg:flex justify-between items-center'>
              <div >
                  <form action="" className='flex flex-col gap-6'>
                      <input type="text" placeholder='الإسم' className='lg:w-400 h-12 bg-[#F5F5F5] border-1 border-white outline-none text-14 font-light p-4'/>
                      <input type="number" placeholder='رقم الجوال' className='lg:w-400 h-12 bg-[#F5F5F5] border-1 border-white outline-none text-14 font-light p-4'/>
                      <input type="email" placeholder='البريد الإلكتروني' className='lg:w-400 h-12 bg-[#F5F5F5] border-1 border-white outline-none text-14 font-light p-4'/>
                      <NavLink>
                          <button className='lg:w-400 h-12 text-white bg-[#887856] outline-none text-14 font-light p-4'>
                              إرسال الطلب
                          </button>
                      </NavLink>
                  </form>
              </div>
              <div>
                  {contactItems.map((item) => (
                      <div className='flex items-center gap-4 mb-3 text-white'>
                          <p className='bg-[#887856] w-14 h-14 text-2xl flex justify-center items-center'>{item.icon}</p>
                          <div>
                              <p className='mb-1 text-lg font-normal text-[#211B0D]'>{item.title}</p>
                              <p className='text-lg font-bold text-[#818181]'>{item.number}</p>
                          </div> 
                      </div>
                  ))}
              </div>
              <div>
                  <h2 className='pb-2'>الموقع : </h2>
                  <img src={ImageMap} alt="" />
              </div>
          </div>
          </div>
      </section>
    )
}  

export default CallMe