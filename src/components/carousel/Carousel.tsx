// Importando os Componentes React Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando seu CSS
import "./Carousel.css";

// Importanto Componentes do Swiper
import { Autoplay, Pagination, Navigation } from "swiper";

import Imagem1 from '../../images/Capa_para_lanchonete_2.png'
import Imagem2 from '../../images/feira_5.png'
import Imagem3 from '../../images/Garaffa_Agua_4.png'
import Imagem4 from '../../images/skincare.png'

function Carrossel() {
    return (
        <>
            
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src={Imagem1} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Imagem2} />
                </SwiperSlide>
                
                <SwiperSlide>
                    <img  src={Imagem3} />
                </SwiperSlide>

               
                <SwiperSlide>
                    <img src={Imagem4} />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel