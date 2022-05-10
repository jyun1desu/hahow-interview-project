import Router from "route";
import { styled } from "stitches.config";
import { ToastContainer } from "components/atoms/Toast";
import 'react-toastify/dist/ReactToastify.css';

const MainContent = styled("main", {
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

function App() {
  return (
    <>
      <div className="App">
        <MainContent>
          <Router />
        </MainContent>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
