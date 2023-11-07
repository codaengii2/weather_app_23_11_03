import { useEffect, useState } from "react";

export const useCurrentWeather = () => {
  const defaultLat = 35.15800729705607;
  const defaultLon = 129.05995166000432;
  //   => 사용자가 위치허용이나, api가 고장났을 경우 기본값으로 지정해둘 변수
  const [lat, setLat] = useState(defaultLat);
  const [lon, setLon] = useState(defaultLon);

  const location = (pos) => {
    // console.log(pos);

    const {
      coords: { latitude, longitude },
    } = pos;

    setLat(latitude);
    setLon(longitude);
  };

  //   console.log(lat, lon);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);
    // => 현재 위치기반으로 위도, 경도값을 가져올 수 있음
  }, [lat, lon]);

  return {
    lat,
    lon,
  };
};
