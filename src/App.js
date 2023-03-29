import "./App.css";
import NavHead from "./components/common/NavHead";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavHead />
       
      </BrowserRouter>
    </>
  );
}

export default App;
