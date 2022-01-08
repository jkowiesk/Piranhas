import { myCourses, marketSets } from "../../mocks/courseCards";
import ItemSection from "../../components/ItemSection/ItemSection";

import s from "./Homepage.module.scss";

function randint(a) {
  return Math.floor(Math.random() * a);
}

const HomePage = () => {
  let sets = myCourses.map((course) => {
    let num = randint(3);
    return { courseName: course.name, name: course.items[num].name };
  });

  return (
    <div>
      <ItemSection
        name="My Sets"
        items={sets}
        rootRoute="my-courses/"
        type="carousel"
      />
      <ItemSection
        name="Market Sets"
        items={marketSets}
        rootRoute="market/"
        type="carousel"
      />
    </div>
  );
};

export default HomePage;
