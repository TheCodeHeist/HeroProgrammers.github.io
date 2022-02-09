import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Members from './pages/Members';
import Projects from './pages/Projects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} index />
      <Route path="/members" element={<Members />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
