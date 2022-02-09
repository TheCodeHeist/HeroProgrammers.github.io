import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Members from './pages/Members';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} index />
      <Route path="/members" element={<Members />} />
      <Route path="/projects" element={<Home />} />
    </Routes>
  );
}

export default App;
