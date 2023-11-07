import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    units: "metric",
    lang: "kr",
    appid: "26e6301e0d581a7f0e7f7de7318adbef",
  },
});

export const getWeather = ({ queryKey }) => {
  // console.log(queryKey);
  // const lat = 35.15800729705607;
  // const lon = 129.05995166000432;
  const [_, lat, lon] = queryKey; //=> 비구조화 할당할땐 문자열 "" 표현 안됨
  // => 변수를 사용하지 않을 땐 _언더바로 표현 가능
  return instance
    .get(`weather?lat=${lat}&lon=${lon}`)
    .then((response) => response.data);
};
