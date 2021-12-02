import s from './CardList.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode"

import SwiperCore, {
    FreeMode
  } from 'swiper';

const CardList = ({cards}) => {
    return <div>
        {cards}
    </div>
}

export default CardList;