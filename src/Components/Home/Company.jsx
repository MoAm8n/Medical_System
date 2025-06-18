import React from 'react'
import { HeaderBody } from '../../Components'
import { Company2 } from '../../data/dummy'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Company = () => {
  const ImagePreview = Company2.find(item => item.ImagePrev).ImagePrev || []
  return (
    <section className='bg-[#FEFAF0]'>
      <div className='container mx-auto px-4 sm:px-6 w-full py-8'>
        <div className='flex flex-col items-center text-center'>
        <HeaderBody title="شركاؤنا" description="نقدم لكم شركاء نجاحنا وعملائنا الكرام"/>
        </div>
        <div className='relative h-28 md:px-20'>
          <Swiper
            slidesPerView={4} 
            spaceBetween={30}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              }
            }}
            className="h-full"
          >
            {Company2.map((item, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <img 
                  src={item.Image} 
                  alt={item.name} 
                  className='object-cover w-[500px]'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
        <div className='bg-white w-full py-8 container m-auto'>
          <div className=' flex flex-col items-center text-center'>
          <HeaderBody title="الجهات المرخصة" description="نقدم لكم الجهات المرخصة التى نعمل معها" />
          </div>
          <div className='flex justify-center items-center lg:gap-6 gap-4 py-4'>
            {ImagePreview.map((idex) => (
              <img src={idex.Image} alt="" className='w-1/5 h-auto object-cover'/>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Company