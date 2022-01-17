import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowButton } from "../ArrowButton/ArrowButton";
import Flashcard from "../Flashcard/Flashcard";
import s from './FlashcardCarousel.module.scss';

export const FlashcardCarousel = ({flashcards}) => {
    const flashcardList = flashcards.map(({ front, back }) => {
        return (
          <SwiperSlide className={s.slider}>
            <Flashcard front={front} back={back} />
          </SwiperSlide>
        )
      });

    const nextRef = useRef(null);
    const prevRef = useRef(null);


    return (
      <div className={s.wrapper}>
        <div ref={prevRef}>
          <ArrowButton rotate={true} />
        </div>
        <Swiper
          loop={true}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {flashcardList}
        </Swiper>
        <div ref={nextRef}>
          <ArrowButton rotate={false} />
        </div>
      </div>
    );
}