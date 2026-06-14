import blueWall from "../../images/blue-wall.jpg"
import boyAndDog from "../../images/boy-and-dog.jpg"
import coastalPostcardPrint from "../../images/coastal-postcard-print.png"
import fruitSketchbook from "../../images/fruit-sketchbook.png"
import handsDraft from "../../images/hands-draft.JPG"
import hands from "../../images/hands.JPG"
import happySummerCard from "../../images/happy-summer-card.png"
import lighthouseDraft from "../../images/lighthouse-draft.jpg"
import lighthouse from "../../images/lighthouse.JPG"
import maplesFriends from "../../images/maples-friends.jpg"
import momDog from "../../images/mom-and-dog.JPG"
import mosaicFlowers from "../../images/mosaic-flowers.jpg"
import olderThanYouThinkDraft from "../../images/older-than-you-think-draft.jpg"
import pinkBlueFlowers from "../../images/pink-blue-flowers.jpg"
import stillLife from "../../images/still-life.jpg"
import taipeiStreetBuilding from "../../images/taipei-street-building.png"
import womensRun from "../../images/womens-run.JPG"
import youngerThanYouThink from "../../images/younger-than-you-are.JPG"
import "../../styles.css"
import LazyImage from "../LazyImage/LazyImage"
import Project from "../Project/Project"
import "../Project/Project.css"
import "./IllosGallery.css"

export default function PdGallery() {
    const sampleIllustrations = [
        {
            src: maplesFriends,
            title: "Maples Friends",
        },
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
        {
            src: blueWall,
            title: "Blue Wall",
        },
        {
            src: stillLife,
            title: "Still Life",
        },
        {
            src: pinkBlueFlowers,
            title: "Pink Blue Flowers",
        },
    ];

    return(
        <div>
            <div className="project-row">
             
                <Project 
                     thumbnail={lighthouse}
                     hoverThumbnail={lighthouseDraft}
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
                     thumbnail={hands}
                     hoverThumbnail={handsDraft}
                     title="Hands"
                     blurb={
                        <>
                    Practice editorial for{" "}
                    <a
                        className="article"
                        href="https://www.thegoodtrade.com/features/importance-of-handcrafting/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        "Why We Need To Work With Our Hands"
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
                     thumbnail={youngerThanYouThink}
                     hoverThumbnail={olderThanYouThinkDraft}
                     title="Older Than You Think"
                     blurb={
                        <>
                    Practice editorial for{" "}
                    <a
                        className="article"
                        href="https://www.theatlantic.com/magazine/archive/2023/04/subjective-age-how-old-you-feel-difference/673086/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        "The Puzzling Gap Between How Old You Are and How Old You Think You Are"
                    </a>
                    </>
                }
                    
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
                        <LazyImage src={illustration.src} alt={illustration.title} />
                    </figure>
                ))}
            </section>
            
        </div>
    )
}
