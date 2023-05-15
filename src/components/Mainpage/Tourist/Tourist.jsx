import styles from './Tourist.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./TouristSwiper.scss";

// import required modules
import {Navigation, Pagination} from "swiper";
import {sliderImageOne, touristImage} from "../../../images/Main/Tourist/index.js";

const Tourist = () => {
    const arrData = [
        {
            id: 14,
            img: sliderImageOne,
            text: 'textone',
            alt: 'На фотографии изображены горы'
        },
        {
            id: 13,
            img: sliderImageOne,
            text: 'texttwo',
            alt: 'На фотографии изображены горы'
        },
        {
            id: 10,
            img: sliderImageOne,
            text: 'textthree',
            alt: 'На фотографии изображены горы'
        },
        {
            id: 11,
            img: sliderImageOne,
            text: 'textfour',
            alt: 'На фотографии изображены горы'
        },
        {
            id: 1,
            img: sliderImageOne,
            text: 'textone',
            alt: 'На фотографии изображены горы'
        },
        {
            id: 2,
            img: sliderImageOne,
            text: 'texttwo',
            alt: 'На фотографии изображены горы'
        },
        {
            id: 3,
            img: sliderImageOne,
            text: 'textthree',
            alt: 'На фотографии изображены горы'
        },
        {
            id: 4,
            img: sliderImageOne,
            text: 'textfour',
            alt: 'На фотографии изображены горы'
        },
        {
            id: 5,
            img: sliderImageOne,
            text: 'textone',
            alt: 'На фотографии изображены горы'
        },
        {
            id: 6,
            img: sliderImageOne,
            text: 'texttwo',
            alt: 'На фотографии изображены горы'
        },
        {
            id: 7,
            img: sliderImageOne,
            text: 'textthree',
            alt: 'На фотографии изображены горы'
        },
        {
            id: 8,
            img: sliderImageOne,
            text: 'textfour',
            alt: 'На фотографии изображены горы'
        },

    ]

    return (
        <section>
            <div className={styles.container}>
                <h2 className={styles.title}>Туристу</h2>

                <div className={styles.textContainer}>
                    <div className={styles.mainContainer}>
                        <img className={styles.touristImage} src={touristImage} alt="Путевая дорожка с символом локации в конце"/>
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
                                {
                                    arrData.map(item =>
                                        <SwiperSlide key={item.id}>
                                            <a href="#">
                                                <img className={styles.sliderImage} src={item.img} alt={item.alt}/>
                                                <p className={styles.sliderText}>{item.text}</p>
                                            </a>
                                    </SwiperSlide>)
                                }
                            </Swiper>

                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Tourist;