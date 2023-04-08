import "./App.css";
import NavHead from "./components/common/NavHead";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import CPDashboard from "./components/chairperson/CPDashboard";
import DYAM from "./components/chairperson/ModCocus/DYAM";
import GSL from "./components/chairperson/GSL";
import Page404 from "./components/common/Page404";


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavHead />   */}
        <Routes>
        <Route path='/dashboard/:tab?' element={<NavHead/>}></Route>
        <Route path='DYAM' element={<DYAM />}></Route>
        <Route path='GSL' element={<GSL />}></Route>
        <Route path='*' element={<Page404/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;