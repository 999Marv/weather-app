import { Fragment } from "react";
import Header from "./layout/Header";
import Items from "./components/Items";

function App() {
  async function fetchWeather(city) {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );

      const data = await res.json();
      console.log(data.main.temp);
    } catch (error) {
      console.log(error.message);
    }
  }

  const date = new Date().toLocaleDateString();

  return (
    <Fragment>
      <Header />
      <Items date={date} onClickButton={() => fetchWeather("brooklyn")} />
      {/* <button onClick={() => fetchWeather("London")}>hh</button> */}
    </Fragment>
  );
}

export default App;
