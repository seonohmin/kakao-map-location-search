import React from "react";
import { useState } from "react";
import KakaoMapScriptLoader from "./Map/KakaoMapScriptLoader";
import DynamicMap from "./Map/DynamicMap";
import SearchLocation from "./Map/SearchLocation";
import { PlaceType } from "./Map/mapTypes";
import MapMarkerController from "./Map/MapMarkerController";

const App = () => {
  const [places, setPlaces] = useState<PlaceType[]>([]);
  const [SelectedPlaceId, setSelectedPlaceId] = useState('');

  return (
    <KakaoMapScriptLoader>
      <DynamicMap>
        <MapMarkerController places={places} SelectedPlaceId={SelectedPlaceId}/>
        <SearchLocation onUpdatePlaces={(places) => {
          setPlaces(places);
        }} onSelect={(placeId) => {
          setSelectedPlaceId(placeId)
        }}/>
      </DynamicMap>
   
    </KakaoMapScriptLoader>
  );
}

export default App