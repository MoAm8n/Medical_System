import React from 'react'
import { NavLink } from 'react-router-dom'
import {HeaderBody} from '../../Components'
import {Contact2} from '../../data/dummy'
import ImageMap from '../../data/map.png'
const Contact = () => {
    const contactItems = Contact2.filter(item => item.title);
    return (
        <section className='bg-[#211B0D]'>
            <div className='container mx-auto px-4 sm:px-6 py-7 text-white'>
                <HeaderBody title='إتصل بنا' description='نحن فى إنتظار إستفساراتكم على مدار 24 ساعة' />
            <div className='lg:flex justify-between items-center'>
                <div >
                    <form action="" className='flex flex-col gap-6'>
                        <input type="text" placeholder='الإسم' className='lg:w-400 h-12 bg-[#211B0D] border-1 border-white outline-none text-14 font-light p-4'/>
                        <input type="number" placeholder='رقم الجوال' className='lg:w-400 h-12 bg-[#211B0D] border-1 border-white outline-none text-14 font-light p-4'/>
                        <input type="email" placeholder='البريد الإلكتروني' className='lg:w-400 h-12 bg-[#211B0D] border-1 border-white outline-none text-14 font-light p-4'/>
                        <NavLink>
                            <button className='lg:w-400 h-12 bg-[#887856] outline-none text-14 font-light p-4'>
                                إرسال الطلب
                            </button>
                        </NavLink>
                    </form>
                </div>
                <div>
                    {contactItems.map((item) => (
                        <div className='flex items-center gap-4 mb-3'>
                            <p className='bg-[#4b463b] w-14 h-14 text-2xl flex justify-center items-center'>{item.icon}</p>
                            <div>
                                <p className='mb-1 text-lg font-normal'>{item.title}</p>
                                <p className='text-lg font-bold'>{item.number}</p>
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

export default Contact