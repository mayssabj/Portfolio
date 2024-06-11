import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Login from "../../img/LOGIN.jpg";
import Item from "../../img/item.jpg";
import AAA from "../../img/AAA.png";
import Posts from "../../img/posts.png";
import mobile from "../../img/mobile.jpg";
import spansor from "../../img/SponsoringController-.png";
import C1 from "../../img/C1.png";
import path from "../../img/path.jpg";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span>Mes Projets</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
      spaceBetween={20}
      slidesPerView={3}
      grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={AAA} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={C1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Item} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Login} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={path} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spansor} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Posts} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mobile} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
