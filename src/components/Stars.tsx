import { fetchEntities } from "@/lib/swapi";
import { Star } from "./ui/Star";

export const Stars = async ({ withPlanets = true }) => {
  const planets = withPlanets ? await fetchEntities("planets", true) : [];

  return [...Array(70), ...planets].map((item, index) => {
    const top = Math.floor(Math.random() * 100);
    const left = Math.floor(Math.random() * 100);
    const duration = Math.floor(Math.random() * (10 - 5 + 1) + 5);

    return (
      <Star key={index} item={item} top={top} left={left} duration={duration} />
    );
  });
};
