// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// importando seu CSS
import "./Carrossel.css";

// import required modules
import { Pagination, Navigation } from "swiper";

function Carrossel() {

    var items = [
        { img: "https://i.ibb.co/Vx3LRwr/AVOZES-1.png" },
        { img: "https://i.ibb.co/8sM60kn/AVOZES-2.png" },
        { img: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAPFKio.img?h=0&w=600&m=6&q=60&u=t&o=f&l=f&x=523&y=166" }
    ]

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    items.map((item) => (
                        <SwiperSlide>
                            <img src={item.img} alt="Imagem" />
                        </SwiperSlide>
                    ))
                }

                {/* 
                    Funções Nominais: function (){}
                    Arrow Function: () => {}
                
                */}

            </Swiper>
        </>
    )
}

export default Carrossel