import lighthouse from "../../images/lighthouse.JPG"
import momDog from "../../images/mom-and-dog.JPG"
import womensRun from "../../images/womens-run.JPG"
import "../../styles.css"
import Project from "../Project/Project"
import "../Project/Project.css"
import "./IllosGallery.css"

export default function PdGallery() {
    return(
        <div>
            <div className="project-row">
             
                <Project 
                     thumbnail={lighthouse}
                     title="Lighthouse Parents"
                     blurb={
                        <>
                    Practice editorial for article{" "}
                    <a
                        className="article"
                        href="https://www.theatlantic.com/family/archive/2024/09/lighthouse-parents-have-more-confident-kids/679976/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        "Lighthouse Parents Have More Confident Kids"
                    </a>
                    </>
                }
                    
                />
           
            
                <Project 
                     thumbnail={momDog}
                     title="Mom and Dog"
                     blurb="Mom and Maple at Bihu"
                    
                />
                 <Project 
                     thumbnail={womensRun}
                     title="Women's Run"
                     blurb="Women's run card for MAC Run Club"
                    
                />
            
            </div>
            
        </div>
    )
}