import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import globalStyle from './globalStyle';
import reportWebVitals from "./reportWebVitals";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

globalStyle();

root.render(
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
