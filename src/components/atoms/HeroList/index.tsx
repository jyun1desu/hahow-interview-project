import HeroCard from "components/atoms/HeroCard";
import Grid from "components/atoms/Grid";
const fakeData = [
  {
    id: 1,
    name: "miffy",
    imagePath:
      "https://cdn04.pinkoi.com/pinkoi.site/event/miffy-2020/03_Theme%20shop_content.png",
  },
  {
    id: 2,
    name: "boris",
    imagePath: "https://i.ytimg.com/vi/IXIUaiHv5e4/maxresdefault.jpg",
  },
  {
    id: 3,
    name: "barbara",
    imagePath: "https://jrsy.tmsimg.com/assets/p12153444_e_h6_aa.jpg",
  },
  {
    id: 4,
    name: "Poppy",
    imagePath:
      "https://miffyblogsusa.files.wordpress.com/2019/02/poppy-and-grunty.jpg",
  },
];

const HeroList = () => {
  return (
    <Grid columns={4} gap={16}>
      {fakeData.map((h) => (
        <li key={h.id}>
          <HeroCard name={h.name} imagePath={h.imagePath} />
        </li>
      ))}
    </Grid>
  );
};

export default HeroList;
