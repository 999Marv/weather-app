import classes from "./Items.module.css";
import Card from "./Card";
import Form from "./Form";
import Button from "./Button";

const Items = (props) => {
  return (
    <Card className={classes.main}>
      <div className={classes.container}>
        <h1>{props.location}</h1> <h3>{props.date}</h3>
      </div>
      <Form />
      <Button onClick={props.onClickButton} />
      <div>{props.current}</div>
      <div>{props.description}</div>
      <div>
        Today: is {props.current}. The high will be {props.maxDegree}. The low
        tonight will be
        {props.minDegree}
      </div>
    </Card>
  );
};

export default Items;
