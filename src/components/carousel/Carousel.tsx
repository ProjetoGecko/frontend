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
            <h2>Produtos Gecko</h2>
            <Swiper
                slidesPerView={2}
                spaceBetween={50}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 1800,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img className="carroImg" src="src\images\banner1.png" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className="carroImg" src="src\images\banner2.png" alt="Imagem" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <img className="carroImg" src="src\images\banner3.png" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className="carroImg" src="src\images\banner4.png" alt="Imagem" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel