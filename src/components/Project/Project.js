import { useLocation } from "react-router-dom";
export default function Project(props) {
const location = useLocation();
const thumbnailClass = location.pathname === "/illustrations" ? "illos-thumbnail" : "thumbnail";
    return (
      <div className="project-container">
      <div className="project-card">
        {/* If page is /illustrations then use class "illos-thumbnail" */}
         <div className="project-image-wrap">
          <img className={thumbnailClass} src={props.thumbnail} alt={props.title} loading="lazy" decoding="async" />
          {props.hoverThumbnail && (
            <img className={`${thumbnailClass} hover-thumbnail`} src={props.hoverThumbnail} alt={`${props.title} draft sketch`} loading="lazy" decoding="async" />
          )}
         </div>
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
