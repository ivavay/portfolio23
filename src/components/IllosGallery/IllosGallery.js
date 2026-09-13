import blueWall from "../../images/blue-wall.webp"
import boyAndDog from "../../images/boy-and-dog.webp"
import coastalPostcardPrint from "../../images/coastal-postcard-print.webp"
import fruitSketchbook from "../../images/fruit-sketchbook.webp"
import handsDraft from "../../images/hands-draft.webp"
import hands from "../../images/hands.webp"
import happySummerCard from "../../images/happy-summer-card.webp"
import lighthouseDraft from "../../images/lighthouse-draft.webp"
import lighthouse from "../../images/lighthouse.webp"
import maplesFriends from "../../images/maples-friends.webp"
import momDog from "../../images/mom-and-dog.webp"
import mosaicFlowers from "../../images/mosaic-flowers.webp"
import olderThanYouThinkDraft from "../../images/older-than-you-think-draft.webp"
import pinkBlueFlowers from "../../images/pink-blue-flowers.webp"
import stillLife from "../../images/still-life.webp"
import taipeiStreetBuilding from "../../images/taipei-street-building.webp"
import womensRun from "../../images/womens-run.webp"
import youngerThanYouThink from "../../images/younger-than-you-are.webp"
import "../../styles.css"
import LazyImage from "../LazyImage/LazyImage"
import Project from "../Project/Project"
import "../Project/Project.css"
import "./IllosGallery.css"
import plum from "../../images/peachtober-plum.webp"
import oak from "../../images/peachtober-oak-tree.webp"

export default function PdGallery() {
    const sampleIllustrations = [
         {
            src: plum,
            title: "Peachtober - Plum",
        },
         {
            src: oak,
            title: "Peachtober - Oak",
        },
        {
            src: maplesFriends,
            title: "Maple's Friends",
        },
        {
            src: taipeiStreetBuilding,
            title: "Taipei Dihua Building",
        },
        {
            src: happySummerCard,
            title: "Happy Summer Card",
        },
        {
            src: coastalPostcardPrint,
            title: "Muir Woods Beach",
        },
        {
            src: boyAndDog,
            title: "Boy and Dog",
        },
        {
            src: fruitSketchbook,
            title: "Wonderfully Made",
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
                     priority
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
                        <figcaption className="illos-grid-title">
                            {illustration.title}
                        </figcaption>
                    </figure>
                ))}
            </section>
            
        </div>
    )
}
