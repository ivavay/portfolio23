import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./components/Footer/Footer.css"
import "./components/Navbar/Navbar.css"
import About from "./pages/About/About"
import Design from "./pages/Design/Design"
import Flow from "./pages/Flow/Flow"
import Home from "./pages/Home/Home"
import Illustrations from "./pages/Illustrations/Illustrations"
import Mosaic from "./pages/Mosaic/Mosaic"
import Newsletter from "./pages/Newsletter/Newsletter"
import Strava from "./pages/Strava/Strava"
import Streetfood from "./pages/Streetfood/Streetfood"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/streetfood" element={<Streetfood />}/>
        <Route path="/design" element={<Design />}/>
        <Route path="/illustrations" element={<Illustrations />}/>
        <Route path="/strava" element={<Strava />}/>
        <Route path="/newsletter" element={<Newsletter />}/>
        <Route path="/flow" element={<Flow />}/>
        <Route path="/mosaic" element={<Mosaic />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
