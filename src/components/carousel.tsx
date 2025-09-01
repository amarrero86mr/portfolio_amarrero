import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { type TSlideProyect } from "../info/proyect_info"
import { useContext } from 'react';
import { DarkLightContext, type TDarkLightContext } from './darklight.context';

// eslint-disable-next-line no-alert
// import "swiper/css"; 
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export const Carousel = ( props: {data: Array<TSlideProyect>} ) => {
    const { changeTheme } = useContext<TDarkLightContext>(DarkLightContext)
    
  return (
    <div className="w-full h-11/12 my-8 p-2">
      <Swiper
        // Añadimos los módulos que queremos usar
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        // Configuramos el comportamiento del carrusel
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
<<<<<<< HEAD
=======
          delay: 5000,
>>>>>>> ce5fc4f5312e7b893bb62318ce0887cba7d84d26
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        
        className={`mySwiper w-full p-4 ${changeTheme}`} >
        {props.data.map((slide) => (
          <SwiperSlide key={slide.id}className='mb-4'>
            <div className="m-auto mb-6 flex items-center justify-center gap-6 p-2 rounded-lg shadow-md border-2 border-current max-w-9/12 h-80">
              {slide.image.trim() !== '' ? <img src={slide.image} alt={slide.title} className="max-w-6/12 m-auto rounded-lg shadow-sm border-2" /> : null}
              <div className='flex flex-col self-start my-4 gap-4'>
              {slide.title.trim() !== '' ? <h3 className="text-2xl text-center mt-0">{slide.title}</h3> : null}
              {slide.description.trim() !== '' ? <p className="text-lg content-center mt-4">{slide.description}</p> : null}

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
