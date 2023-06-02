import Navbar from "../../components/Navbar/Navbar"
import salad from "../../images/nicolesgraphic-salad-final.png"
import saladsketch from "../../images/salad-sketch.jpg"
import giftbox from "../../images/nicolesgraphics-giftbox.png"
import signpostsketch from "../../images/signpost-sketch.png"
import signpost from "../../images/nicolesgraphics-signpost.png"
import giftboxsketchcolor from "../../images/giftbox-sketchcolor.png"
import "../../styles.css"

export default function Newsletter(){
    return(
        <div>
            <Navbar />
            <h2>Nicole's Newsletter Graphics</h2>
            <div className="bio">
                <p className="regular">A couple months ago, I had the chance to work with Nicole Garcia for her <a target="_blank" className="underline" href="https://wontonface.substack.com/">newsletter</a> on freelancing and product design. It had 
                been a blast working with her and ideating different ways to visualize her articles in 3D. 
                </p>
                <br></br>
                <p className="regular">
                We had a kick-off meeting in the beginning and the rest of the check-ins were done async over Figma and emails. We followed a process of generating low-fi's, then low-fi with color, then 3D, with feedback scattered in between.
                I had loads of fun pushing my creative muscles to brainstorm differnt possibilities of visualizng the main points of her articles.
                </p>
            </div>
            <div className="two-column-imgs">
                <img src={saladsketch} alt="salad sketch"/>
                <img src={salad} alt="salad"/>
            </div>
            <div className="two-column-imgs">
                <img src={signpostsketch} alt="signpost sketch"/>
                <img src={signpost} alt="signpost"/>
            </div>
            <div className="two-column-imgs">
                <img src={giftboxsketchcolor} alt="giftbox sketch"/>
                <img src={giftbox} alt="giftboxt"/>
            </div>
        </div>
    )
}