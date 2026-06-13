import LazyImage from "../LazyImage/LazyImage";
import { useLocation } from "react-router-dom";
export default function Project(props) {
const location = useLocation();
const isIllustrationsPage = location.pathname === "/" || location.pathname === "/illustrations";
const thumbnailClass = isIllustrationsPage ? "illos-thumbnail" : "thumbnail";
    return (
      <div className="project-container">
      <div className="project-card">
        {/* If page is illustrations then use class "illos-thumbnail" */}
         <div className="project-image-wrap">
          <LazyImage className={thumbnailClass} src={props.thumbnail} alt={props.title} />
          {props.hoverThumbnail && (
            <LazyImage className={`${thumbnailClass} hover-thumbnail`} src={props.hoverThumbnail} alt={`${props.title} draft sketch`} />
          )}
         </div>
            <h2 className="title-card">{props.title}</h2>
            <p className="blurb">{props.blurb}</p>
            <div className="tags">
            {!isIllustrationsPage && (
      <div className="tag">{props.tag}</div>
    )}
            </div></div>
      </div>
    );
  }
