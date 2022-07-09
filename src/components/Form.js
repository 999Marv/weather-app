import "./Form.module.css";

const Form = (props) => {
  return (
    <form onSubmit={props.submitHandler}>
      <input
        type="text"
        value={props.giveValue}
        onChange={props.changeHandler}
      />
      <button onClick={props.clickHandler}>Search</button>
    </form>
  );
};

export default Form;
