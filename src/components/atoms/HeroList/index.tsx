import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getHeroesList } from "api/hero";
import HeroCard from "components/atoms/HeroCard";
import { HeroBrief } from "types/hero";
import { styled } from "stitches.config";


const Grid = styled('ul', {
  display: 'grid',
  listStyle: "none",
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '16px',

  '@mb': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
  }
})

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
    <Grid>
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
