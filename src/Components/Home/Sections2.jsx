import React from 'react'
import {NavLink} from 'react-router-dom'
import {HeaderBody} from '..'
import {Sections2} from '../../data/dummy'
const Sections = () => {
    return (
        <section className='container mx-auto px-4 sm:px-6 py-8'>
        <HeaderBody title="الأقسام" description="نعرض لكم الأقسام الخاصة بمركز العناية الفاخرة " button="المزيد" location='/اقسام' />
        <div className='grid lg:grid-cols-3 md:grid-cols-2'>
            {Sections2.slice(0, 6).map((item) => (
            <NavLink to={item.location || '#'}>
                <div className='bg-gray-100 w-auto md:w-60 lg:w-96 h-auto p-3 flex flex-col items-start gap-5 cursor-pointer ' key={item.id}>
                <img src={item.ImagePl} alt={item.title} />
                    <h2 className='text-base font-bold' style={{color: '#211B0D'}}>{item.title}</h2>
                    <p className='text-base font-normal' style={{color: '#787878'}}>{item.dec}</p>
                <div className='flex items-center pb-2 max-md:w-1/5'>
                    {item.start.map((start) => (
                        <img src={start.Image} alt={start.Image} />
                    ))}
                </div>
                </div>
            </NavLink>
            ))}
        </div>
        </section>
    )
}

export default Sections