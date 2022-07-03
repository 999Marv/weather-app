import classes from "./Items.module.css";
import Card from "./Card";

const Items = (props) => {
  return (
    <Card className={classes.main}>
      <div className={classes.container}>
        <h1>location</h1> <h3>date</h3>
      </div>
      <form>
        <input type="text" />
      </form>
      <div>current weather</div>
      <div>Bunch of descriptions</div>
      <div>
        Today: (weather). The high will be (degree). The low tonight will be
        (degree)
      </div>
    </Card>
  );
};

export default Items;
