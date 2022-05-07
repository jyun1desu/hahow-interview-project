import { ReactNode } from "react";
import { styled } from "stitches.config";

const GridBox = styled("ul", {
  display: "grid",
  listStyle: "none",
});

type GridProps = {
  columns: number;
  gap?: number;
  children: ReactNode;
};

const Grid = ({ columns, gap = 0, children }: GridProps) => {
  return (
    <GridBox
      css={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${gap}px`,
      }}
    >
      {children}
    </GridBox>
  );
};


export default Grid;
