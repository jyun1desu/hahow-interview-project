import { styled } from "stitches.config";

const StyledPage = styled("div", {
  variants: {
    variant: {
      primary: {
        padding: "70px 40px",
        width: "100%",
        maxWidth: "1200px",
      },
    },
  },
});

export enum LayoutTypes {
  primary = "primary",
}

type PageProps = {
  Page: () => JSX.Element;
  PageLayoutType?: LayoutTypes;
};

const Layout =
  ({ Page, PageLayoutType = LayoutTypes.primary }: PageProps) =>
  () => {
    return (
      <StyledPage variant={PageLayoutType}>
        <Page />
      </StyledPage>
    );
  };

export default Layout;
