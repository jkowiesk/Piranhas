import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SetsCarousel } from "../../components/SetsCarousel/SetsCarousel";
import UserService from "../../services/UserService.js";

import s from "./SetManager.module.scss";

const SetManager = () => {
  const { courseName } = useParams();
  const [mySets, setMySets] = useState([]);
  useEffect(() => {
    UserService.getCourseSet(courseName).then((response) => {
      setMySets(response.data);
    });
  }, []);

  return mySets.length ? <SetsCarousel items={mySets} /> : null;
};

export default SetManager;
