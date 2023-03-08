import React, { useRef, useState } from "react";
import styles from "../styles/Slider.module.css";
import { title, data } from "../data/InvestmentRoadmap";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  FreeMode,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Slider() {
  return (
    <>
      <div className={styles.roadmapTitle}>{title.title}</div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={false}
        pagination={false}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={3000}
        freeMode={true}
        breakpoints={{
          550: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1900: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        scrollbar={{ draggable: true }}
        className={styles.mySwiper}
      >
        {data.map((data, index) => (
          <div key={index}>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.swiperWrapper}>
                <div className={styles.icon}>{data.icon}</div>
                <div className={styles.titleWrapper}>
                  <p className={styles.title}> {data.title},</p>
                  <p className={styles.year}> {data.year}</p>
                </div>
                <p className={styles.text}> {data.text}</p>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
