import { NavLink } from "react-router-dom";
import "../../styles.css";
import "./Navbar.css";

export default function Navbar() {
    return(
        <div className="tabs">
        <div className="tabs-left">
            <NavLink to="/design" className={({isActive}) => isActive ? "tab tab-active" : "tab"}>
                <h3>🖱 Product Design </h3>
            </NavLink>
            <NavLink to="/" className={({isActive}) => isActive ? "tab tab-active" : "tab"}>
                <h3>🎨 3D </h3>
            </NavLink>
            <NavLink to="/illustrations" className={({isActive}) => isActive ? "tab tab-active" : "tab"}>
                <h3>🧑🏻‍🎨 Illustrations </h3>
            </NavLink>
        </div>
         <div className="tabs-right">
            <NavLink to="/about" className={({isActive}) => isActive ? "tab tab-active" : "tab"}>
                <h3>💁🏻‍♀ About </h3>
            </NavLink>
         <div className="tab">
             <a href="https://docs.google.com/document/d/1nJKIKdaZID-s8rS-GIOx0O48msLDYBbEBaVV5JkKSLU/edit?usp=sharing" target="_blank" rel="noreferrer" ><h3>📄️ Resume </h3></a>
         </div>
     </div>
     </div>
    )

}