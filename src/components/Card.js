import classs from "./Card.module.css";

const Card = (props) => {
  const classess = `${classs.card} ${props.className}`;
  return (
    <div className={classs.container}>
      <div className={classess}>{props.children}</div>
    </div>
  );
};

export default Card;
