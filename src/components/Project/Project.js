import { useLocation } from "react-router-dom";
export default function Project(props) {
const location = useLocation();
    return (
      <div className="project-container">
      <div className="project-card">
        {/* If page is /illustrations then use class "illos-thumbnail" */}
         <img className={    location.pathname === "/illustrations" ? "illos-thumbnail" : "thumbnail"} src={props.thumbnail} alt="dataviz" />
            <h2 className="title-card">{props.title}</h2>
            <p className="blurb">{props.blurb}</p>
            <div className="tags">
            {location.pathname !== "/illustrations" && (
      <div className="tag">{props.tag}</div>
    )}
            </div></div>
      </div>
    );
  }