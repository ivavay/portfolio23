import Accordian from "../../components/Accordian/Accordian"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import bioImage from "../../images/bio-image.jpg"
import "../../styles.css"
import "./About.css"


export default function About(){
    return(
        <div className="about-page">
            <Navbar />
            <main className="about-main">
                <h2 className="about-heading">Hey there! Thanks for dropping by!</h2>
                <div className="bio">
                    <div className="bio-text">
                        <p className="regular">My name is Ivy & I'm an illustrator and design/frontend developer based in Taipei, Taiwan. I graduated from the University of California, Santa Cruz in 2021 with a B.S. in Cognitive Science 
                            with a concentration in HCI, where I spent time designing user-centered interfaces for community flourishing. Most recently, I can be seen tinkering with Codex and Adobe Fresco, as well as more traditional 
                            media like gouache, neocolor pastels, and embroidery. Aside from making stuff, Aside from making stuff, I play a lot of tennis, rows, and trains with <a className="link" href="https://www.instagram.com/montreal.athletes.club/" rel="noopener noreferrer" target="_blank">MAC run club</a>. 
                            I also write on <a className="link" 
                            href="https://ivychen.substack.com/" rel="noopener noreferrer" target="_blank">Substack</a>  and about technology on <a className="link" href="https://dev.to/ivavay" rel="noopener noreferrer" target="_blank">DevTo.</a>
                        </p>
                        <h2 className="faq">FAQ's</h2>
                        <Accordian />
                    </div>
                    <div className="bio-image-wrap">
                        <img className="bio-image" src={bioImage} alt="Ivy at the beach" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
