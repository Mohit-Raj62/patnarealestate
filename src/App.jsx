import { BrowserRouter, Routes, Route } from "react-router-dom";
import Singup from "./pages/Singup";
import Singin from "./pages/Singin"
import About from "./pages/About";
import Profile from './pages/Profile';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sing-in" element={<Singin />} />
        <Route path="/sing-up" element={<Singup />} />
        <Route path="/profile" element={<Profile />} />
       
      </Routes>
    </BrowserRouter>
  );
}
