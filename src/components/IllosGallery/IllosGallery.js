import lighthouse from "../../images/lighthouse.JPG"
import momDog from "../../images/mom-and-dog.JPG"
import womensRun from "../../images/womens-run.JPG"
import taipeiStreetBuilding from "../../images/taipei-street-building.png"
import happySummerCard from "../../images/happy-summer-card.png"
import coastalPostcardPrint from "../../images/coastal-postcard-print.png"
import boyAndDog from "../../images/boy-and-dog.jpg"
import fruitSketchbook from "../../images/fruit-sketchbook.png"
import mosaicFlowers from "../../images/mosaic-flowers.jpg"
import "../../styles.css"
import Project from "../Project/Project"
import "../Project/Project.css"
import "./IllosGallery.css"

export default function PdGallery() {
    const sampleIllustrations = [
        {
            src: taipeiStreetBuilding,
            title: "Taipei Street Building",
        },
        {
            src: happySummerCard,
            title: "Happy Summer Card",
        },
        {
            src: coastalPostcardPrint,
            title: "Coastal Postcard Print",
        },
        {
            src: boyAndDog,
            title: "Boy and Dog",
        },
        {
            src: fruitSketchbook,
            title: "Fruit Sketchbook",
        },
        {
            src: mosaicFlowers,
            title: "Mosaic Flowers",
        },
    ];

    return(
        <div>
            <div className="project-row">
             
                <Project 
                     thumbnail={lighthouse}
                     title="Lighthouse Parents"
                     blurb={
                        <>
                    Practice editorial for{" "}
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
            <section className="illos-grid" aria-label="Sample illustrations">
                {sampleIllustrations.map((illustration) => (
                    <figure className="illos-grid-item" key={illustration.title}>
                        <img src={illustration.src} alt={illustration.title} />
                    </figure>
                ))}
            </section>
            
        </div>
    )
}
