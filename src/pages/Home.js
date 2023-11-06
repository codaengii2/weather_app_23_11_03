import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import styled from "styled-components";

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
`;
const Location = styled.div``;
const Temp = styled.div``;
const Desc = styled.div``;
const Separ = styled.div``;
const ConWrap = styled.div`
  display: flex;
`;
const Con = styled.div``;

export const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["weather"],
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

  return (
    <>
      {isLoading ? (
        "loading"
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
