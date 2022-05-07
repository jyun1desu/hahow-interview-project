import HeroList from "components/atoms/HeroList";
import PageLayout, { LayoutTypes } from "pages/PageLayout";
import { Outlet } from "react-router-dom";

const HeroesContent = () => {
  return (
    <>
      <HeroList />
      <Outlet />
    </>
  );
};

const Heroes = PageLayout({
  Page: HeroesContent,
  PageLayoutType: LayoutTypes.primary,
});

export default Heroes;
