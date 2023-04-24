import React from "react"
import "../../styles.css";
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import PdGallery from "../../components/PdGallery/PdGallery"
import 'animate.css';


export default function Design() {
    return(
        <div>
            <Navbar />
            <h2 className="animate__animated animate__slideInUp animate__slow">Hello, I’m Ivy Chen – a <span className="highlighter">product designer</span> and <span className="highlighter">3D designer</span> with some coding chops from San Francisco Bay, currently based in Taipei, Taiwan. </h2>
            <PdGallery />
            <Footer />
        </div>

        
    )
        
}