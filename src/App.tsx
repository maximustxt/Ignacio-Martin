import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Detail } from "./components/index";

function App() {
  return (
    <Routes>
      <Route path="/Detail/:id" element={<Detail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
