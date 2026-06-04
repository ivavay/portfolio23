import 'animate.css';
import Footer from "../../components/Footer/Footer";
import IllosGallery from "../../components/IllosGallery/IllosGallery";
import Navbar from "../../components/Navbar/Navbar";
import "../../styles.css";


export default function Illustrations() {
    return(
        <div>
            <Navbar />
            <h2 className="header animate__animated animate__slideInUp animate__slow">Hello, I’m Ivy Chen – a <span className="highlighter">maker</span> designing and building<span className="highlighter"> in Taipei, Taiwan </span>, previously tinkering in SF Bay </h2>
            <IllosGallery />
            <Footer />
        </div>

        
    )
        
}