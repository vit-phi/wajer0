import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const ContentCarousel = () => {
  const imageUrls = [
    "/images/mos.jpg", "/images/mos1.jpg", "/images/mos2.jpg", "/images/mos3.jpg",
    "/images/mos4.jpg", "/images/mos5.jpg", "/images/mos6.jpg", "/images/mos7.jpg",
    "/images/mos8.jpg", "/images/mos9.jpg", "/images/mos10.jpg", "/images/mos11.jpg",
    "/images/mos12.jpg", "/images/mos13.jpg"
  ];

  return (
    <div>
      <style>
        {`
          .swiper-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh; /* ความสูงเต็มหน้าจอ */
          }

          .swiper-slide img {
            width: 100%; /* ให้ภาพเต็มขนาดที่กำหนด */
            height: 100%; /* ใช้ความสูงเต็ม */
            object-fit: cover; /* ควบคุมการจัดวางภาพให้เต็มพื้นที่ */
          }
        `}
      </style>

      {/* สไลด์ที่ 1 */}
      <Swiper
        slidesPerView={2}  
        spaceBetween={10}  
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper h-100 object-cover rounded-md mb-4"
      >
        {imageUrls.map((url, i) => (
          <SwiperSlide key={i}>
            <img src={url} alt={`Image ${i + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* สไลด์ที่ 2 */}
      <Swiper
        slidesPerView={6} 
        spaceBetween={10}  
        pagination={true}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper object-cover rounded-md"
      >
        {imageUrls.map((url, i) => (
          <SwiperSlide key={i}>
            <img className="rounded-md" src={url} alt={`Image ${i + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContentCarousel;
