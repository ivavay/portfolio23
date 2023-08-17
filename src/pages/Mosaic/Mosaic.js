import Navbar from "../../components/Navbar/Navbar"
import r from "../../images/types_mosaic_r.png"
import h from "../../images/types_mosaic_h.png"
import g from "../../images/types_mosiac_g.png"
import "../../styles.css"
export default function Mosaic (){
    return(
        <div>
            <Navbar />
            <h2>Mosaic Letters</h2>
            <div className="bio">
                <p className="regular">I did this series in the spring of 2023. This was inspired by the Taiwanese mosaics you often see on old vintage buildings.
                I hope to extend this series once I gather some more inspiration for mosaics in Chiayi.
                </p>
                <br></br>
            </div>
            <div class="two-column-imgs">
                <img src={g} alt="g"/>
                <img src={h} alt="h"/>
            </div>
            <div class="two-column-imgs">
                <img src={r} alt="r"/>
                
            </div>
        </div>
    )
}