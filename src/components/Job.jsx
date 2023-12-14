const Job = (props) => {
  return (
    <div className={props.color}>
      <div className="title">{props.title}</div>
      <div className="details">
        {props.contractType} - {props.country} - {props.city}
      </div>
    </div>
  );
};
export default Job;
