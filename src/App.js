import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Streetfood from "./pages/Streetfood/Streetfood"
import Design from "./pages/Design/Design"
import Strava from "./pages/Strava/Strava"
import Newsletter from "./pages/Newsletter/Newsletter"
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
        <Route path="/design" element={<Design />}/>
        <Route path="/strava" element={<Strava />}/>
        <Route path="/newsletter" element={<Newsletter />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
