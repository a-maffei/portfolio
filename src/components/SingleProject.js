export default function SingleProject({
  img,
  name,
  description,
  tools,
  layout,
}) {
  return (
    <div className={`project-cont ${layout}`}>
      <div className="project-text-cont">
        <h3 className="project-name">{name}</h3>
        <p>{description}</p>
        <div className="project-tools">
          {tools.map((el) => (
            <div>{el}</div>
          ))}
        </div>
        <div className="project-bttn">
          {" "}
          <button className="main-bttn">Live</button>
          <button className="main-bttn">GitHub</button>
        </div>
      </div>
      <img className="project-img" src={img}></img>
    </div>
  );
}
