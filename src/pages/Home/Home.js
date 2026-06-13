import 'animate.css';
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";
import Navbar from "../../components/Navbar/Navbar";
import "../../styles.css";


export default function Home() {
    return(
        <div>
            <Navbar />
            <h2 className="header animate__animated animate__slideInUp animate__slow">
            Hello, I’m Ivy Chen – a{" "}
            <span className="highlighter">maker</span>
            {" "}illustrating and building{" "}
            <span className="highlighter">in Taipei, Taiwan</span>,
            {" "}previously tinkering in SF Bay
            </h2>
            <Gallery />
            <Footer />
        </div>

        
    )
        
}