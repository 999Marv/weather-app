import { useState } from "react";
import "./Form.module.css";

const Form = (props) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    setCity("");
  };

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

{
  /* <form onSubmit={handleSubmit}>
  <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
  <button>Search</button>
</form>; */
}
