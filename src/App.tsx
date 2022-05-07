import Router from "route";
import { styled } from "stitches.config";

const MainContent = styled("main", {
	display: 'flex',
	justifyContent: 'center',
	width: '100%',
});

function App() {
  return (
    <div className="App">
      <MainContent>
        <Router />
      </MainContent>
    </div>
  );
}

export default App;
