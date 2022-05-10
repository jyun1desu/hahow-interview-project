import HeroList from "components/atoms/HeroList";
import PageLayout, { LayoutTypes } from "pages/PageLayout";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const HeroesContent = () => {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <HeroList />
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </Suspense>
    </>
  );
};

const Heroes = PageLayout({
  Page: HeroesContent,
  PageLayoutType: LayoutTypes.primary,
});

export default Heroes;
