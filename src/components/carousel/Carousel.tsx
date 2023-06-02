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

function Carrossel() {
    return (
        <>
            
            <Swiper
                slidesPerView={1}
                spaceBetween={-55}
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
                    <img src="src\images\Capa_para_lanchonete_2.png" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="src\images\feira_5.png" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <img  src="src\images\Garaffa_Agua_4.png" alt="Imagem" />
                </SwiperSlide>

               
                <SwiperSlide>
                    <img src="src\images\skincare.png" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel