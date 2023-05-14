import React from 'react';
import styles from './Tourist.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./TouristSwiper.scss";

// import required modules
import {Navigation, Pagination} from "swiper";
import {sliderImageOne, touristImage} from "../../images/Main/Tourist/index.js";

const Tourist = () => {
    return (
        <section>
            <div className={styles.container}>
                <h2 className={styles.title}>Туристу</h2>

                <div className={styles.textContainer}>
                    <div className={styles.mainContainer}>
                        <img className={styles.touristImage} src={touristImage} alt="tourist"/>
                        <div className={styles.textBlock}>
                            <p className={styles.text}>
                                Ярославская область открыта для туристов. Наш край по праву считается одним из самых
                                богатых культурным наследием регионов Центральной части России. Многие события
                                ярославской земли стали вехами становления русского народа. Старинные русские города –
                                Ярославль, Ростов Великий, Переславль-Залесский и Углич – самые красивые жемчужины в
                                ожерелье Золотого Кольца России.
                            </p>
                            <h3 className={styles.subtitle}>Города Ярославии</h3>
                            <Swiper
                                slidesPerView={5}
                                spaceBetween={15}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >

                                <SwiperSlide>
                                    <a href="#">
                                        <img className={styles.sliderImage} src={sliderImageOne} alt="slider-image"/>
                                        <p className={styles.sliderText}>text</p>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="#">
                                        <img className={styles.sliderImage} src={sliderImageOne} alt="slider-image"/>
                                        <p className={styles.sliderText}>text</p>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="#">
                                        <img className={styles.sliderImage} src={sliderImageOne} alt="slider-image"/>
                                        <p className={styles.sliderText}>text</p>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="#">
                                        <img className={styles.sliderImage} src={sliderImageOne} alt="slider-image"/>
                                        <p className={styles.sliderText}>text</p>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="#">
                                        <img className={styles.sliderImage} src={sliderImageOne} alt="slider-image"/>
                                        <p className={styles.sliderText}>text</p>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="#">
                                        <img className={styles.sliderImage} src={sliderImageOne} alt="slider-image"/>
                                        <p className={styles.sliderText}>text</p>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="#">
                                        <img className={styles.sliderImage} src={sliderImageOne} alt="slider-image"/>
                                        <p className={styles.sliderText}>text</p>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="#">
                                        <img className={styles.sliderImage} src={sliderImageOne} alt="slider-image"/>
                                        <p className={styles.sliderText}>text</p>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="#">
                                        <img className={styles.sliderImage} src={sliderImageOne} alt="slider-image"/>
                                        <p className={styles.sliderText}>text</p>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="#">
                                        <img className={styles.sliderImage} src={sliderImageOne} alt="slider-image"/>
                                        <p className={styles.sliderText}>text</p>
                                    </a>
                                </SwiperSlide>

                            </Swiper>

                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Tourist;