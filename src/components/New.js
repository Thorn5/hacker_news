const New = (props) => {

  return (
    <div className="new">
      <h4>{props.hit.title}</h4>
      <a className="link" href={props.hit.url}>Link</a>
      <div className="date">{props.hit.created_at}</div>
      <div className="author">Author: {props.hit.author}</div>
      <div className="points">Points: {props.hit.points}</div>
    </div>
  );
}

export default New;