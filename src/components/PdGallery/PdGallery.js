import "./PdGallery.css"
import "../../styles.css"
import Project from "../Project/Project"
import "../Project/Project.css"
import stravatn from "../../images/strava-redesign.png"
import { Link } from "react-router-dom"

export default function PdGallery() {
    return(
        <div>
            <div className="project-row">
             <Link to="/strava" relative="/strava">
                <Project 
                     thumbnail={stravatn}
                     title="Strava Redesign"
                     blurb="Rethinking the experience for group challenge on Strava"
                     tag="Class Solo Project"
                />
            </Link>
            </div>
            
        </div>
    )
}