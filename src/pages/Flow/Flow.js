import Navbar from "../../components/Navbar/Navbar"
import cam from "../../images/watercolor-cam.png"
import shoe from "../../images/watercolor-shoe.png"
import "../../styles.css"
export default function Flow (){
    return(
        <div>
            <Navbar />
            <h2>Flow</h2>
            <div className="bio">
                <p className="regular">This summer, I wanted to work on a series of watercolor-inspired 3D on the concept of flow, which is a state of
                well-being where you feel like you're so immersed in the process that you lose track of time. The first two I have here are photography and 
                running. But stay tuned for more!
                </p>
                <br></br>
            </div>
            <div class="two-column-imgs">
                <img src={cam} alt="cam"/>
                <img src={shoe} alt="shoe"/>
            </div>
        </div>
    )
}