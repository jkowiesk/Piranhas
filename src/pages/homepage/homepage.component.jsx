import React from "react";
import { myCourses, marketCourses } from "../../courseCards.js";
import Section from "../../components/section/section.component.jsx";

import "./homepage.styles.scss";

function HomePage() {
  return (
    <div>
      <Section front="My Courses" cards={myCourses} />
      <Section front="Market Courses" cards={marketCourses} />
    </div>
  );
}

export default HomePage;
