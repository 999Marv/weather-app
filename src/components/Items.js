import classes from "./Items.module.css";

const Items = (props) => {
  return (
    <main className={classes.container}>
      <div className={classes.sec}>
        <h2>{props.location}</h2>
        <h3>{props.date}</h3>
      </div>
      <div className={classes.third}>
        <div className={classes.u}>
          <h3>
            It is currently
            <u> {props.current}°F</u>
          </h3>
          <h3>
            The high will be
            <u> {props.maxDegree}°F </u>
          </h3>
          <h3>
            The low will be
            <u> {props.minDegree} °F</u>
          </h3>
        </div>

        <div className={classes.fourth}>
          <h3>
            Today has
            <u> {props.description}</u>
          </h3>
          <h3>
            Wind Speed
            <u> {props.windSpeed}</u>
          </h3>
        </div>
      </div>
    </main>
  );
};

export default Items;
