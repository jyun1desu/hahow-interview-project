import { Route, Routes, Navigate } from "react-router-dom";
import Heroes from "pages/Heroes";
import HeroProfile from "components/organisms/HeroProfile";

const Router = () => {
  return (
    <Routes>
      <Route path="/heroes" element={<Heroes />}>
        <Route path=":heroId" element={<HeroProfile />} />
      </Route>
      <Route path="*" element={<Navigate to="/heroes" replace />} />
    </Routes>
  );
};

export default Router;
