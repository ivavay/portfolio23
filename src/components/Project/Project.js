export default function Project(props) {
    return (
      <div className="project-card">
         <img className="thumbnail" src={props.thumbnail} alt="dataviz" />
            <h2 className="title">{props.title}</h2>
            <p>{props.blurb}</p>
            <div className="tags">
            <div className="tag">{props.tag}</div>
            </div>
      </div>
    );
  }