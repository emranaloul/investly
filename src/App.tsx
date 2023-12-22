import "./App.css";
import SideNavbar from "./components/SideNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import AvailableUnits from "./pages/AvailableUnits";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className=" w-screen-2xl h-screen flex">
          <SideNavbar />
          <div className=" w-full">
            <Routes>
              <Route path="/projects" element={<Projects />} />
              <Route path="/available-units" element={<AvailableUnits />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
