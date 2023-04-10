import "./App.css";
import NavHead from "./components/common/NavHead";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import DYAM from "./components/chairperson/ModCocus/DYAM";
import Page404 from "./components/common/Page404";
import FeedbackMo from "./components/chairperson/GSL/FeedbackMo";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavHead />   */}
        <Routes>
        <Route path='/dashboard/:tab?' element={<NavHead/>}></Route>
        <Route path='DYAM' element={<DYAM />}></Route>
        <Route path='FeedbackMo' element={<FeedbackMo />}></Route>

        <Route path='*' element={<Page404/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;