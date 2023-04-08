import "./App.css";
import React, { useState } from 'react';
import NavHead from "./components/common/NavHead";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CPDashboard from "./components/chairperson/CPDashboard";
import DYAM from "./components/chairperson/ModCocus/DYAM";
import GSL from "./components/chairperson/GSL";
import UNMD from "./components/common/UNMD";
import NotFound from "./components/common/NotFound";

function App() {
  const [isPathMatched, setIsPathMatched] = useState(false);

  const handlePathMatch = () => {
    setIsPathMatched(true);
  }

  return (
    <>
      <BrowserRouter>
        <NavHead />
        <Routes>
        <Route path='/' element={<CPDashboard/>}></Route>
        <Route path='DYAM' element={<DYAM/>}></Route>
        <Route path='GSL' element={<GSL/>}></Route>
        <Route path='UNMD' element={<UNMD/>}></Route>
        <Route component={NotFound} />


        </Routes>
        {!isPathMatched && <div>Other components to hide</div>}
      </BrowserRouter>
    </>
  );
}

export default App;
