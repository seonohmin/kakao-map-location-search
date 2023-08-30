import { useContext } from "react";
import { createContext } from "react";

export const KakaoMapContext = createContext<kakao.maps.Map | null>(null)

export const useMap = () => {
  const kakaoMap = useContext(KakaoMapContext)

  if(!kakaoMap) {
    throw new Error('kakaomap not found')
  }

  return kakaoMap;
}