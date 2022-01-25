import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/swiper.min.css";
import Set from "../Set/Set";
import Card from "../UI/Card/Card";
import AddCardButton from "../AddCardButton/AddCardButton";

import s from "./SetsCarousel.module.scss";

export const SetsCarousel = ({ items }) => {
  const sets = items.map(({ name }) => {
    return (
      <SwiperSlide className={s.slide}>
        <Set title={name} routeUrl={name} />
      </SwiperSlide>
    );
  });

  return (
    <Card title="Set Manager" size="2">
      <div className={s.wrapper}>
        {sets.length ? (
          <Swiper
            className={s.sets}
            direction={"vertical"}
            spaceBetween={20}
            freeMode={true}
            slidesPerView={"auto"}
            loop={true}
          >
            {sets}
          </Swiper>
        ) : null}
        <span className={s.button}>
          <AddCardButton label="Add New Set" link="add-set" />
        </span>
      </div>
    </Card>
  );
};
