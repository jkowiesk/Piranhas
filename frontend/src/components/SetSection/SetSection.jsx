import Set from "../Set/Set";
import { ArrowButton } from "../ArrowButton/ArrowButton";
import s from "./SetSection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { NavLink } from "react-router-dom";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Navigation } from "swiper/core";
import Card from "../UI/Card/Card";
import { useRef } from "react";

SwiperCore.use([Navigation]);

const SetSection = ({ courseName, items, routeUrl }) => {
  const sets = items.map(({ name }) => {
    let setRouteUrl = `${courseName}/${name}`;
    return (
      <SwiperSlide className={s.slider}>
        <Set title={name} routeUrl={setRouteUrl} isPreview={true} />
      </SwiperSlide>
    );
  });

  const nextRef = useRef(null);
  const prevRef = useRef(null);

  return (
    <Card className={s.wrapper} size="2">
    <h3 className={s.title}>{`${courseName} sets preview`}</h3>
      <div className={s.swiper}>
        <div ref={prevRef}>
          <ArrowButton rotate={true}/>
        </div>
        <Swiper
          className={s.sets}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }}
        >
          {sets}
        </Swiper>
        <div ref={nextRef}>
          <ArrowButton />
        </div>
      </div>
      <button type="button" className={s.button}>
        <NavLink to={routeUrl}>Manage sets</NavLink>
      </button>
    </Card>
  );
};

export default SetSection;
