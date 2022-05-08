import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getHeroesList } from "api/hero";
import Grid from "components/atoms/Grid";
import HeroCard from "components/atoms/HeroCard";
import { HeroBrief } from "types/hero";

const HeroList = () => {
  const { heroId } = useParams();
  const [heroesList, setList] = useState<HeroBrief[]>([]);

  useEffect(() => {
    const setHeroesList = async () => {
      const list = await getHeroesList();
      setList(list)
    }
    setHeroesList();
  }, [setList])

  return (
    <Grid columns={4} gap={16}>
      {heroesList.map((h) => (
        <li key={h.id}>
          <Link to={`${h.id}`}>
            <HeroCard
              name={h.name}
              imagePath={h.image}
              isPicked={heroId === h.id}
            />
          </Link>
        </li>
      ))}
    </Grid>
  );
};

export default HeroList;
