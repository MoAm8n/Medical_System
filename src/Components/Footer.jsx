import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Contact2 } from '../data/dummy'
import img from '../data/BGE1.png'
import imgvisa1 from '../data/made.png'
import imgvisa2 from '../data/visa.png'
import imgvisa3 from '../data/Tmara-01.png'
import imgvisa4 from '../data/Tabby-01.png'


const Footer = () => {
    const iconSocial = Contact2.find(item => item.Social) ?.Social || []
    return (
        <section className='bg-[#887856] relative overflow-hidden'>
            <div className='container mx-auto px-4 sm:px-6 py-7 text-white '>
                <div className='lg:flex justify-between items-center'>
                    <div>
                        <h2>روابط سريعة :</h2>
                        <Link className='flex items-center my-2' to={'/'}>
                            <span className='w-[6] h-[12] bg-white ml-2 rounded-full'></span>
                            <h4 className='text-14 font-light'>وظائف</h4>
                        </Link>
                        <Link className='flex items-center my-2' to='/المدونة'>
                            <span className='w-[6] h-[12] bg-white ml-2 rounded-full'></span>
                            <h4 className='text-14 font-light'>المدونة</h4>
                        </Link>
                        <Link className='flex items-center my-2' to='/خدماتنا'>
                            <span className='w-[6] h-[12] bg-white ml-2 rounded-full'></span>
                            <h4 className='text-14 font-light' >الخدمات</h4>
                        </Link>
                    </div>
                    <div>
                        <h2>للإشتراك فى نشرتنا البريدية :</h2>
                        <form action="" className='mt-2 flex items-center gap-3 max-lg:flex-col'>
                            <input type="email" placeholder='البريد الإلكتروني' className='bg-transparent text-white w-80 h-12 outline-none border-1 border-white p-4 font-normal text-base placeholder:text-white' />
                            <button className='w-36 h-12 text-black bg-white text-base font-bold p-4 flex items-center justify-center'>
                                إشتراك
                            </button>
                        </form>
                    </div>
                    <div>
                        <h2>إيقونات التواصل الإجتماعى :</h2>
                        <div className='flex flex-wrap gap-2 w-3/4 my-2'>
                            {iconSocial.map((icon) => (
                                <NavLink 
                                    to={icon.location}
                                    className='text-base w-10 h-8 border-1 border-white p-2 flex justify-center items-center hover:bg-[#aca189] transition-all duration-200'
                                >
                                    {icon.icon}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
                <div className='bg-[#211B0D] text-white p-4 flex justify-center items-center max-md:flex-col gap-2'>
                    <h2>طرق الدفع المتوفرة لدينا : </h2>
                    <div className='flex items-center'>
                    <Link>
                        <img src={imgvisa1} alt="" className='w-10 h-auto object-cover'/>
                    </Link>
                    <Link>
                        <img src={imgvisa2} alt="" className='w-10 h-auto object-cover'/>
                    </Link>
                    <Link>
                        <img src={imgvisa3} alt="" className='w-10 h-auto object-cover'/>
                    </Link>
                    <Link>
                        <img src={imgvisa4} alt="" className='w-10 h-auto object-cover'/>
                    </Link>
                    </div>
                </div>
            <div className='absolute left-5 top-20'>
                <img src={img} alt="" className='w-52 h-52'/>
            </div>
        </section>
    )
}

export default Footer