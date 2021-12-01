import React from "react";
import { items, marketCourses } from "../../mocks/courseCards";
import CardSection from "../../components/CardSection/CardSection";

import s from "./Homepage.module.scss";

function randint(a) {
  return Math.floor(Math.random() * a);
}

const HomePage = () => {
  //const sets = items.map((item) => item.sets[randint(3)]);

  return (
    <div>
      {//<CardSection title="My Sets" items={sets} />
      //<CardSection title="Market Sets" items={marketCourses} />
    }
    </div>
  );
}

export default HomePage;
