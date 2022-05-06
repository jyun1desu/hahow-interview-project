import { styled } from "stitches.config";

const RatioBox = styled("div", {
  fontSize: 0,
  position: "relative",
  width: "100%",

  "& > img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: "0",
    left: "0",
  },
});

type ImageProps = {
  path: string;
  alt: string;
  className?: string;
  ratio: number;
};

const RatioImage = ({ className, path, alt, ratio }: ImageProps) => {
  return (
    <RatioBox
      className={className}
      css={{
        paddingBottom: `${100 / ratio}%`,
      }}
    >
      <img src={path} alt={alt} />
    </RatioBox>
  );
};

export default RatioImage;