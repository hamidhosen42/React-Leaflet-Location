import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InputMap from "./InputMap/InputMap";
import OutputMap from "./OutputMap/OutputMap";
import OurLocations from "./OurLocations/OurLocations";
import Header from "./Header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<InputMap />} />
          <Route path="/inputlocation" element={<InputMap />} />
          <Route path="/:lat/:lng" element={<OutputMap />} />
          <Route path="/locations" element={<OurLocations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
