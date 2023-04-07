import "./Gallery.css"
import "../../styles.css"
import Project from "../Project/Project"
import "../Project/Project.css"
import salad from "../../images/nicolesgraphics-saladblue.png"
import streetfood from "../../images/nightmarket_dishes.png"
import golf from "../../images/golf-starterpack-pasture.png"
import { Link } from "react-router-dom"

export default function Gallery() {
    return(
        <div>
            <div className="project-row">
                <div className="overlay">
                    <Project 
                     thumbnail={salad}
                     title="Nicole's Newsletter Graphics"
                     blurb="A series of graphics for Nicole's newsletter"
                     tag="Client"
                />
                </div>
             <Link to="/streetfood" relative="/streetfood">
                <Project 
                     thumbnail={streetfood}
                     title="Taiwan Street Food"
                     blurb="A 3D dataviz of popular street food over time"
                     tag="Collab"
                />
            </Link>
            </div>
            <div className="project-row">
                <Project 
                     thumbnail={golf}
                     title="Golf Starter Pack"
                     blurb="A birthday card for a loved one"
                     tag="Personal"
                />
            </div>
        </div>
    )
}