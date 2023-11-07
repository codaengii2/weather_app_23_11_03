import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import styled from "styled-components";
import { useCurrentWeather } from "../lib/useCurrentWeather";
import { Loding } from "../components/Loding";

const Wrap = styled.div`
  max-width: 400px;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(
    0deg,
    rgba(122, 253, 255, 1) 0%,
    rgba(155, 150, 255, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  color: #fff;
`;
const Location = styled.div`
  font-size: 50px;
  font-weight: 900;
`;
const Temp = styled.div`
  font-size: 40px;
`;
const Desc = styled.div`
  font-size: 30px;
`;
const Separ = styled.div`
  width: 150px;
  height: 2px;
  background-color: #fff;
  margin-bottom: -50px;
`;
const ConWrap = styled.div`
  display: flex;
  height: 80px;
  /* background-color: red; */
  font-size: 24px;
  text-align: center;
  font-weight: 500;
`;
const Con = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:nth-child(2) {
    margin: 0 18px;
  }
`;

export const Home = () => {
  const { lat, lon } = useCurrentWeather();
  console.log(lat, lon);
  // => 객체형태로 만들어놨기 때문

  const { data, isLoading } = useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: getWeather,
  });
  // => api 에 요청할 때 사용하는 hook
  // => 비동기 통신 사용시 상태관리하는 hook
  // => useQuery를 사용할 땐 반드시 QueryClientProvider를 설정해줘야 됨

  console.log(data);

  // const {
  //   name,
  //   main: { temp, temp_max, feels_like, temp_min },
  // } = data;
  // => useeffect 사용
  return (
    <>
      {isLoading ? (
        <Loding />
      ) : (
        <Wrap>
          <Location>{data?.name}</Location>
          <Temp>{Math.round(data?.main?.temp)}°</Temp>
          <Desc>{data?.weather[0]?.description}</Desc>
          <Separ></Separ>
          <ConWrap>
            <Con>
              <h3>체감온도</h3>
              <p>{Math.round(data?.main?.feels_like)}°</p>
            </Con>
            <Con>
              <h3>최저온도</h3>
              <p>{Math.round(data?.main?.temp_min)}°</p>
            </Con>
            <Con>
              <h3>최고온도</h3>
              <p>{Math.round(data?.main?.temp_max)}°</p>
            </Con>
          </ConWrap>
        </Wrap>
      )}
    </>
  );
};
