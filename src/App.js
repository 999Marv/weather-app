import { useState } from "react";
import Header from "./layout/Header";
import Items from "./components/Items";
import Form from "./components/Form";
import Footer from "./layout/Footer";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    location: "",
    current: "",
    minDegree: "",
    maxDegree: "",
    description: "",
    windSpeed: "",
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

      console.log(data);

      setWeather({
        location: data.name,
        current: farenheit(data.main.temp),
        minDegree: farenheit(data.main.temp_min),
        maxDegree: farenheit(data.main.temp_max),
        description: data.weather[0].description,
        windSpeed: data.wind.speed,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  const date = new Date().toLocaleDateString();

  return (
    <>
      <Header />
      <Form
        submitHandler={handleSubmit}
        changeHandler={(e) => setCity(e.target.value)}
        clickHandler={() => fetchWeather(city)}
        giveValue={city}
      />
      <Items
        location={weather.location}
        date={date}
        current={weather.current}
        minDegree={weather.minDegree}
        maxDegree={weather.maxDegree}
        description={weather.description}
        windSpeed={weather.windSpeed}
      />
      <Footer />
    </>
  );
}

export default App;
