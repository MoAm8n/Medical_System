import React from 'react'
import {HeaderBody} from '../../Components'
import { Blog2 } from '../../data/dummy'
import { NavLink } from 'react-router-dom'
const Blog = () => {
    return (
        <section className='bg-[#FAFAFA] w-full'>
            <div className='container mx-auto px-4 sm:px-6 py-7'>
                <HeaderBody title="المدونة" description="هذة مجموعة من المقالات المدونة لدينا نقدمها لكم"/>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-y-5 gap-x-3 h-auto justify-items-center'>
                {Blog2.map((item) => (
                    <div key={item.id} className='flex max-lg:flex-col lg:w-[580px] md:w-[320px] lg:h-[242px] h-fit bg-white p-4'>
                        <img src={item.Image} alt={item.id} className='w-auto max-lg:h-2/5 object-cover'/>
                        <div className='lg:p-4 p-2'>
                            <div className='flex justify-between items-center w-full pb-4'>
                            <h2 className='text-xl font-bold'>{item.title}</h2>
                            <p className='text-14 font-bold text-[#887856]'>{item.date}</p>
                            </div>
                            <p className='text-[#818181] font-normal lg:text-[15px] '>{item.dec}</p>
                            <NavLink 
                                to={item.location || '#'}
                            >
                                <button className='text-[#887856] font-bold text-base lg:mt-8 float-left flex items-center gap-2'>
                                    {item.button}{item.icon}
                                </button>
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}

export default Blog