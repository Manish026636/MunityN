import "./App.css";
import NavHead from "./components/common/NavHead";
import MainTab from "./components/common/MainTab";
import { BrowserRouter } from "react-router-dom";
import CPDashboard from "./components/chairperson/CPDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavHead />
        <MainTab />
        <CPDashboard/>
      </BrowserRouter>
    </>
  );
}

export default App;
