import Set from "../Set/Set"
import s from './SetSection.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'
import { NavLink } from "react-router-dom";
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {
    Navigation
  } from 'swiper/core';

  SwiperCore.use([Navigation]);

const SetSection = ({ name, items, routeUrl }) => {
    const sets = items.map(({ name }) => {
        return (
        <SwiperSlide className={s.slider}>
            <Set title={name}/>
        </SwiperSlide>
        )
    })

    return <div className={s.wrapper}>
        <h3 className={s.title}>{`${name} sets preview`}</h3>
        <Swiper className={s.sets} slidesPerView={3} spaceBetween={20} loop={true}>
            {sets}
        </Swiper>
        <button type='button' className={s.button}>
            <NavLink to={routeUrl}>Manage sets</NavLink>
        </button>
    </div>
}

export default SetSection;