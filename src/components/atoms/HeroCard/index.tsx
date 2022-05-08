import { styled } from "stitches.config";
import RatioImage from "components/atoms/RatioImage";

const Card = styled("div", {
  border: "1px solid $gray400",
  borderRadius: "8px",
  padding: "16px",
  backgroundColor: 'white',
  transition: '200ms transform',

  "& > .image": {
    borderRadius: "8px",
    overflow: "hidden",
  },

  "&:hover": {
    transform: 'scale(1.04)',
  },

  variants: {
    isPicked: {
      true: {
        transform: 'scale(1.04)',
        border: "1px solid $pink",
      }
    }
  }
});

const Name = styled("p", {
  fontSize: "24px",
  textAlign: "center",
  color: "$gray300",
  letterSpacing: '1px',
  marginTop: '16px',

  variants: {
    isPicked: {
      true: {
        color: '$pink'
      }
    }
  }
});

type HeroCardProps = {
  imagePath: string;
  name: string;
  isPicked: boolean;
};
const HeroCard = ({ imagePath, name, isPicked = false }: HeroCardProps) => {
  return (
    <Card isPicked={isPicked}>
      <RatioImage className="image" path={imagePath} alt={name} ratio={1 / 1} />
      <Name isPicked={isPicked}>{name}</Name>
    </Card>
  );
};

export default HeroCard;
