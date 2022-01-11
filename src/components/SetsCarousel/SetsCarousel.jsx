import { ArrowButton } from "../ArrowButton/ArrowButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/swiper.min.css";
import s from "./SetsCarousel.module.scss";
import Set from "../Set/Set";
import { useRef } from "react";
import clsx from "clsx";
import Card from "../UI/Card/Card";

import SwiperCore, { Mousewheel } from "swiper/core";

SwiperCore.use([Mousewheel]);

export const SetsCarousel = (props) => {
  const sets = props.items.map(({ courseName, name }) => {
    let routeUrl = `${props.rootRoute}${courseName}/${name}`;
    return (
      <SwiperSlide className={s.slide}>
        <Set title={name} routeUrl={props.rootRoute ? routeUrl : `${name}`} />
      </SwiperSlide>
    );
  });

  const nextRef = useRef(null);
  const prevRef = useRef(null);

  return (
    <Card className={s.wrapper} size="1">
      <div className={s.content}>
        <div ref={prevRef}>
          <ArrowButton rotate={true} />
        </div>
        <Swiper
          spaceBetween={20}
          freeMode={true}
          slidesPerView={"auto"}
          loop={true}
          mousewheel={true}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          <div className={clsx(s.gradient, s["gradient--left"])} />
          <div className={clsx(s.gradient, s["gradient--right"])} />
          {sets}
        </Swiper>
        <div ref={nextRef}>
          <ArrowButton />
        </div>
      </div>
    </Card>
  );
};
