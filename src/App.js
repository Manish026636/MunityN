import "./App.css";
import NavHead from "./components/common/NavHead";
import MainTab from "./components/common/MainTab";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavHead />
        <MainTab />
      </BrowserRouter>
    </>
  );
}

export default App;
