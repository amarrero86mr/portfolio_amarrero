import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { useContext, useState } from 'react';
import { DarkLightContext, type TDarkLightContext } from './darklight.context';
import { ModalCertificate } from './modal.certificates';
import type { TSlidecertificates } from '../info/certificate_info';


export const CarouselCertificates = (props: { data: Array<TSlidecertificates> }) => {
  const { changeTheme } = useContext<TDarkLightContext>(DarkLightContext)
  const [onoffModal, setOnoffModal] = useState<boolean>(false);
  const [dataModal, setDataModal] = useState<TSlidecertificates>()

  const fnOnModalCert = () => {
    setOnoffModal(!onoffModal)
  }

  return (
    <div className="w-full h-96 my-8">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}

        className={`mySwiper w-full h-full ${changeTheme}`} >
        {props.data.map((slide) => (
          <SwiperSlide key={slide.id} >
            <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-md h-full cursor-pointer" >
              {slide.title.trim() !== '' ? <h3 className="text-2xl mb-4">{slide.title}</h3> : null}
              {slide.description.trim() !== '' ? <p className="text-lg text-center mb-4">{slide.description}</p> : null}
              {slide.image.trim() !== '' ?
                <img
                  onClick={()=>{setDataModal(slide), fnOnModalCert()}}
                  src={slide.image}
                  alt={slide.title}
                  className="max-w-xs md:max-w-sm rounded-lg shadow-sm border-2" />
                : null}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {onoffModal
        ? <ModalCertificate fnOnModalCert={fnOnModalCert} data={dataModal!}></ModalCertificate>
        : null
      }
    </div>
  );
};
