import Navbar from "../../components/Navbar/Navbar"
import "./Streetfood.css"
import dataviz from "../../images/dataviz-streetfood.png"
import streetfood from "../../images/nightmarket_dishes.png"
import "../../styles.css"
export default function Streetfood(){
    return(
        <div>
            <Navbar />
            <h2>Taiwan Street Food</h2>
            <div className="bio">
                <p className="regular">Last year, I had the chance to join a team of data viz enthusiasts at Taiwan Data Stories to work on a project around Taiwan's night market snacks as a part of the 2022's #30daysofchart challenge on Twitter.
                We worked on the project for a month from March to April.
                </p>
                <br></br>
                <p className="regular">
                I was responsible for making the 3D illustrations. I used Cinema4D to make a total of ten 3D renders to go long with the most popular street snacks ranking over the years. 
                See live interactice website <a className="underline" href="https://taiwandatastories.com/taiwan-street-food-interactive/" target="blank" rel="noreferrer" >here</a>.
                </p>
            </div>
            <div class="two-column-imgs">
                <img src={dataviz} alt="dataviz"/>
                <img src={streetfood} alt="streetfood"/>
            </div>
        </div>
    )
}