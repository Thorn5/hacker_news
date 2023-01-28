import useFormattedDate from "./useFormattedDate";

const New = (props) => {

  const formattedDate = useFormattedDate(props.hit.created_at);

  return (
    <div className="new">
      <h4>{props.hit.title}</h4>
      <div className="news-info">
        <a className="link" href={props.hit.url}>Link</a>
        <div className="date">{formattedDate}</div>
        <div className="author">Author: {props.hit.author}</div>
        <div className="points">Points: {props.hit.points}</div>
      </div>
    </div>
  );
}

export default New;