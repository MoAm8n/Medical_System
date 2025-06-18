import React from 'react';
import { Link } from 'react-router-dom';
import { Home2 } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Home = () => {
  const { currentColor } = useStateContext();

  return (
    <section className='px-4 sm:px-8 py-8 overflow-hidden'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-around items-center gap-8'>
          <div className='w-full md:w-1/2'>
            {Home2.map((item) => (
              <div key={item.title} className='mb-8'>
                <h1 className='text-2xl md:text-3xl font-bold pb-4'>{item.title}</h1>
                <p 
                  className='pb-4 text-xl leading-10' 
                  style={{ color: item.decColor }}
                >
                  {item.dec}
                </p>
                <Link to={item.path || '#'}>
                  <button 
                    className='BtnHome px-6 py-3 transition-all hover:opacity-90 flex justify-center items-center' 
                    style={{ 
                      background: currentColor, 
                      color: item.color 
                    }}
                  >
                    {item.button}
                  </button>
                </Link>
              </div>
            ))}
          </div>
          <div className='w-full md:w-[28%] relative'>
            <Swiper
              slidesPerView={1}
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
              className="h-full"
            >
              <SwiperSlide>
                <img 
                  src={`${process.env.PUBLIC_URL}/images/image1.png`} 
                  alt="home"
                  className='w-auto h-auto object-cover'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img 
                  src={`${process.env.PUBLIC_URL}/images/image1.png`} 
                  alt="home" 
                  className='w-auto h-auto object-cover'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img 
                  src={`${process.env.PUBLIC_URL}/images/image1.png`} 
                  alt="home" 
                  className='w-auto h-auto object-cover'
                />
              </SwiperSlide>
            </Swiper>
            <span className='absolute max-lg:hidden w-[250px] h-[300px] bg-gradient-to-t from-[#96896b34] to-[#65542e] top-16 left-11 rounded-t-full'></span>
                <img 
                  src={`${process.env.PUBLIC_URL}/images/heart_logo.png`} 
                  alt="home" 
                  className='w-4/5 absolute -top-6 -left-28'
                />
                <img 
                  src={`${process.env.PUBLIC_URL}/images/heart_logo.png`} 
                  alt="home" 
                  className='w-4/5 absolute bottom-0 -right-52'
                />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;