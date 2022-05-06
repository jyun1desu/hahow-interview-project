import { styled } from "stitches.config";
import RatioImage from "components/atoms/RatioImage";

const Card = styled("div", {
  border: "1px solid lightgrey",
  borderRadius: "8px",
  padding: "16px",

  "& > .image": {
    borderRadius: "8px",
    overflow: "hidden",
  },
});

const Name = styled("p", {
  fontSize: "24px",
  textAlign: "center",
  color: "green",
  letterSpacing: '1px',
  marginTop: '16px'
});

type HeroCardProps = {
  imagePath: string;
  name: string;
};
const HeroCard = ({ imagePath, name }: HeroCardProps) => {
  return (
    <Card>
      <RatioImage className="image" path={imagePath} alt={name} ratio={1 / 1} />
      <Name>{name}</Name>
    </Card>
  );
};

export default HeroCard;
