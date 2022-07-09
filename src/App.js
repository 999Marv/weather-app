import { Fragment, useState } from "react";
import Header from "./layout/Header";
import Items from "./components/Items";
import Form from "./components/Form";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    current: "",
    minDegree: "",
    maxDegree: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity("");
  };

  const farenheit = (num) => {
    return (1.8 * (num - 273) + 32).toFixed(0);
  };

  async function fetchWeather(city) {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );

      const data = await res.json();

      setWeather({
        current: farenheit(data.main.temp),
        minDegree: farenheit(data.main.temp_min),
        maxDegree: farenheit(data.main.temp_max),
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  const date = new Date().toLocaleDateString();

  return (
    <Fragment>
      <Header />
      <Form
        submitHandler={handleSubmit}
        changeHandler={(e) => setCity(e.target.value)}
        clickHandler={() => fetchWeather(city)}
        giveValue={city}
      />
      <Items
        date={date}
        current={weather.current}
        minDegree={weather.minDegree}
        maxDegree={weather.maxDegree}
      />
    </Fragment>
  );
}

export default App;
