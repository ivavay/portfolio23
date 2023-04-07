import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Streetfood from "./pages/Streetfood/Streetfood"
import "./components/Navbar/Navbar.css"
import "./components/Footer/Footer.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/streetfood" element={<Streetfood />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
