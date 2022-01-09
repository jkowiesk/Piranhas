import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import AddCardButton from "../../components/AddCardButton/AddCardButton.jsx";
import Set from "../../components/Set/Set.jsx";
import Card from "../../components/UI/Card/Card.jsx";
import { myCourses } from "../../mocks/courseCards.js";
import s from "./SetManager.module.scss";
import "swiper/swiper.min.css";

const SetManager = () => {
  const params = useParams();
  const [{ items }] = myCourses.filter(
    ({ name }) => name.toLowerCase() === params.courseName.toLowerCase()
  );

  const sets = items.map(({ name }) => {
    return (
    <SwiperSlide>
      <Set title={name} routeUrl={name} />
    </SwiperSlide>
    );
  });

  return (
    <Card title="Set Manager" size="2">
      <div className={s.wrapper}>
        <Swiper 
          className={s.sets} 
          direction={'vertical'} 
          spaceBetween={20}
          freeMode={true}
          slidesPerView={'auto'}
          loop={true} 
        > 
        {sets} 
        </Swiper>
        <span className={s.button}>
          <AddCardButton label="Add New Set" link="add-set" />{" "}
        </span>
      </div>
    </Card>
  );
};

export default SetManager;
