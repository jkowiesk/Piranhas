import ItemSection from "../../components/ItemSection/ItemSection";
import UserService from "../../services/UserService";
import { useEffect, useState } from "react";

import s from "./Homepage.module.scss";

function randint(a) {
  return Math.floor(Math.random() * a);
}

const HomePage = () => {
  const [sets, setSets] = useState({ marketSets: [], mySets: [] });
  useEffect(() => {
    UserService.getPreview().then((response) => {
      setSets(response.data);
    });
  }, []);

  return (
    <div>
      {sets.mySets.length ? (
        <ItemSection
          name="My Sets"
          items={sets.mySets}
          rootRoute="my-courses"
          type="carousel"
        />
      ) : null}
      {sets.marketSets.length ? (
        <ItemSection
          name="Market Sets"
          items={sets.marketSets}
          rootRoute="market"
          type="carousel"
        />
      ) : null}
    </div>
  );
};

export default HomePage;
