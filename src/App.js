import "./App.css";
import NavHead from "./components/common/NavHead";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CPDashboard from "./components/chairperson/CPDashboard";
import DYAM from "./components/chairperson/ModCocus/DYAM";
import GSL from "./components/chairperson/GSL";
import UNMD from "./components/common/UNMD";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavHead />
        <Routes>
        <Route path='/' element={<CPDashboard/>}></Route>
        <Route path='DYAM' element={<DYAM/>}></Route>
        <Route path='GSL' element={<GSL/>}></Route>
        <Route path='UNMD' element={<UNMD/>}></Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
