import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    units: "metric",
    lang: "kr",
    appid: "26e6301e0d581a7f0e7f7de7318adbef",
  },
});

export const getWeather = () => {
  const lat = 35.15800729705607;
  const lon = 129.05995166000432;
  return instance.get(`weather?lat=${lat}&lon=${lon}`);
};
