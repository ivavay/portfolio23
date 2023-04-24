import Navbar from "../../components/Navbar/Navbar"
import Accordian from "../../components/Accordian/Accordian"
import "./About.css"
import "../../styles.css"


export default function About(){
    return(
        <div>
            <Navbar />
            <h2>Hey there! Thanks for dropping by!</h2>
            <div className="bio">
                <p className="regular">My name is Ivy & I'm a product designer/3D designer based in Taipei, Taiwan. I graduated from the University of California, Santa Cruz in 2021 with a B.S. in Cognitive Science 
                    with a concentration in HCI. In college, I was heavily involved in the hackathon organizing scene and at HCI labs, where I primarily worked on projects on community organizing. Since graduating, 
                    I have been working on personal projects, collabs with a data viz org, and 3D client work. I am looking for a full-time product design role and am open for 3D freelance projects. 
                </p>
            </div>
            <h2 className="faq">FAQ's</h2>
            <Accordian />
        </div>
    )
}