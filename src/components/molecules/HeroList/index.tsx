import { Link, useParams } from "react-router-dom";
import { styled } from "stitches.config";
import { useRecoilValue } from "recoil";
import { heroListState } from "recoil/hero";
import HeroCard from "components/atoms/HeroCard";

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
  const heroesList = useRecoilValue(heroListState);

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
