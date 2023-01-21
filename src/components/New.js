const New = (props) => {

  return (
    <div className="new">
      <h3>{props.hit.title}</h3>
      <div className="createdAt">{props.hit.created_at}</div>
      <div className="author">{props.hit.author}</div>
    </div>
  );
}

export default New;