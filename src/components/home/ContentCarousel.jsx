import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const ContentCarousel = () => {
  const imageUrls = [
    "/images/1.jpg", "/images/11.jpg", "/images/2.jpg", "/images/3.jpg",
    "/images/4.jpg", "/images/5.jpg", "/images/6.jpg", "/images/7.jpg",
    "/images/8.jpg", "/images/9.jpg", "/images/10.jpg"
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
    </div>
  );
};

export default ContentCarousel;
