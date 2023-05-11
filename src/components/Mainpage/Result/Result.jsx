import React, { useState } from "react";
import styles from "./Result.module.scss";
import { resultSliderImage } from "../../../../images/Main/Result/index.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./ResultSwiper.scss";
import { Pagination, Autoplay } from "swiper";
const Result = () => {
  // фейк данные из бэка
  const [state, setState] = useState([
    { id: 1, status: false },
    { id: 2, status: false },
    { id: 3, status: false },
    { id: 4, status: false },
    { id: 5, status: false },
    { id: 6, status: false },
    { id: 7, status: false },
    { id: 8, status: false },
    { id: 9, status: false },
    { id: 10, status: false },
    { id: 11, status: false },
    { id: 12, status: false },
    { id: 13, status: false },
    { id: 14, status: false },
    { id: 15, status: false },
    { id: 16, status: false },
    { id: 17, status: false },
    { id: 18, status: false },
    { id: 19, status: false },
    { id: 20, status: false },
    { id: 21, status: false },
    { id: 22, status: false },
    { id: 23, status: false },
    { id: 24, status: false },
    { id: 25, status: false },
    { id: 26, status: false },
    { id: 27, status: false },
    { id: 28, status: false },
    { id: 29, status: false },
    { id: 30, status: false },
    { id: 31, status: false },
  ]);
  // перебор массива , для выяснения какой элемент активный
  const chooseItem = (id) => {
    const newArr = state.map((item) =>
      item.id === id ? { ...item, status: true } : { ...item, status: false }
    );
    setState(newArr);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Итоги и записи встреч</h2>
      <div className={styles.mainInfo}>
        <Swiper
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={resultSliderImage} alt="swiperImage" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={resultSliderImage} alt="swiperImage" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={resultSliderImage} alt="swiperImage" />
          </SwiperSlide>
        </Swiper>
        {/* закинул бы в Link, но react-router не установлен */}
        <div className={styles.gridItems}>
          {state.map((item) => (
            <a
              style={{ background: item.status ? "#FFCC33" : "#D9D9D9" }}
              onClick={() => chooseItem(item.id)}
              className={styles.linkItem}
              key={item.id}
              href="#"
            >
              {item.id}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Result;
