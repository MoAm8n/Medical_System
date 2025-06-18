import React from 'react'
import {Sections2} from '../data/dummy'

const sections = () => {
    return (
        <section>
            <div className="container mx-auto py-12 px-10">
                <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                    {Sections2.map((item) => (
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
                    ))}
                </div>
            </div>
        </section>
    )
}

export default sections