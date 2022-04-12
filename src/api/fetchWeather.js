import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (query) => {
    console.log(process.env.REACT_APP_APIKEY);
  const { data } = await axios.get(
    BASE_URL + `?q=${query}&appid=${process.env.REACT_APP_APIKEY}`
  );
  return data;
};
