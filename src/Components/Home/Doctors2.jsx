import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import { HeaderBody } from '../../Components';
import { Doctors2 } from '../../data/dummy';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, FreeMode } from 'swiper/modules';

const Doctors = () => {
    const navigate = useNavigate()
    const handelBookClick = (doctor) => {
        navigate('/الحجز', {
            state: {
                doctorData : {
                    id: doctor.id,
                    image: doctor.Image,
                    name: doctor.name,
                    evaluation: doctor.rating,
                    color: "#FFBA00",
                    evaluationPary: doctor.spec,
                    colorPary: "#211B0D",
                    experience: `خبرة ${doctor.experience} سنوات`,
                    bio: doctor.bio,
                    price: `${doctor.price} جنيه`,
                    availableDates: doctor.availableDates 
                }
            }
        })
    }
    return (
        <section className='container mx-auto px-4 sm:px-6 py-8'>
            <HeaderBody title="أطباؤنا" description=" نقدم لكم فريق الأطباء المتميزين لدينا لخدمتكم على مدار 24 ساعة " />
            <div className='relative'>
                <Swiper 
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                modules={[Navigation,FreeMode]} 
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                breakpoints={{
                    0: { 
                    slidesPerView: 1,
                    spaceBetween: 20
                    },
                    640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                    },
                    768: {
                    slidesPerView: 2,
                    spaceBetween: 25
                    },
                    1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                    },
                    1280: {
                    slidesPerView: 4,
                    spaceBetween: 30
                    }
                }}
            >
                {Doctors2.slice(0, 6).map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="bg-[#F5F5F5] md:w-72 p-2 h-auto overflow-hidden flex flex-col hover:bg-[#FFF1D4] transition-all duration-300 cursor-pointer">
                            <img 
                                src={item.Image} 
                                alt={item.name} 
                                className="w-full object-cover h-96"
                            />
                            <h2 className='text-xl font-bold text-[#211B0D] mt-4'>{item.name}</h2>
                            <div className="flex justify-between items-center mt-2">
                                <button className="w-20 h-10 text-base font-normal text-[#787878] bg-[#FCF5E8]">
                                    {item.spec}
                                </button>
                                <span className="text-base font-normal flex items-center">
                                        <span className='text-[#787878] ml-1'>{item.numsStart}</span>
                                        <span className='ml-1'>{item.numStart}</span>
                                    <div className='flex ml-1'>
                                        {Array.isArray(item.start) ? 
                                            item.start.map((star, index) => (
                                                <span 
                                                    key={`${item.id}-star-${index}`} 
                                                    className='w-5 h-5 text-yellow-300'
                                                >
                                                    {star}
                                                </span>
                                            ))
                                            : item.start
                                        }
                                    </div>
                                </span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className="flex flex-col gap-1 mt-2">
                                <h3 className="text-base font-bold">{item.dec}</h3>
                                <p className="text-gray-400 text-xs">{item.title}</p>
                                </div>
                                <NavLink 
                                    to={item.location || '#'} 
                                    onClick={(e) =>{
                                        handelBookClick(item)
                                        e.preventDefault()
                                    }}
                                    className="w-24 h-10 border-1 border-[#887856] text-[#887856] flex justify-center items-center text-14 font-bold hover:bg-[#887856] hover:text-[#fff] transition-all duration-200"
                                >
                                    {item.button}
                                </NavLink>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="custom-prev absolute  left-20 max-sm:-top-[50px] -top-[72px] z-20 w-12 h-10 flex items-center justify-center border-1 border-[#211B0D] text-[#C7AF7C] bg-white">
                <FaArrowRight/>
            </button>
            <button className="custom-next absolute  left-3 max-sm:-top-[50px] -top-[72px] z-20 w-12 h-10 flex items-center justify-center bg-[#211B0D] text-[#C7AF7C]">
                <FaArrowLeft/>
            </button>
            </div>
        </section>
    )
}

export default Doctors;

