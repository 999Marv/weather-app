import classes from "./Form.module.css";

const Form = (props) => {
  return (
    <div className={classes.container}>
      <form onSubmit={props.submitHandler}>
        <input
          className={classes.form}
          type="text"
          value={props.giveValue}
          onChange={props.changeHandler}
        />
        <button className={classes.btn} onClick={props.clickHandler}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
