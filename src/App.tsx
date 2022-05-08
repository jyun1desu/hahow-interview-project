import Router from "route";
import { RecoilRoot } from "recoil";
import { styled } from "stitches.config";

const MainContent = styled("main", {
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <MainContent>
          <Router />
        </MainContent>
      </div>
    </RecoilRoot>
  );
}

export default App;
