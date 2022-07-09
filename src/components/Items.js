import classes from "./Items.module.css";
import Card from "./Card";

const Items = (props) => {
  return (
    <Card className={classes.main}>
      <div className={classes.container}>
        <h1>{props.location}</h1> <h3>{props.date}</h3>
      </div>
      <div>{props.current}°F</div>
      <div>
        The high will be {props.maxDegree}°F. The low will be {props.minDegree}
        °F
      </div>
    </Card>
  );
};

export default Items;
