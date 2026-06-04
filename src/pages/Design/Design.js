import 'animate.css';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PdGallery from "../../components/PdGallery/PdGallery";
import "../../styles.css";


export default function Design() {
    return(
        <div>
            <Navbar />
            <h2 className="header animate__animated animate__slideInUp animate__slow">Hello, I’m Ivy Chen – a <span className="highlighter">maker</span> designing and building<span className="highlighter"> in Taipei, Taiwan </span>, previously tinkering in SF Bay </h2>
            <PdGallery />
            <Footer />
        </div>

        
    )
        
}