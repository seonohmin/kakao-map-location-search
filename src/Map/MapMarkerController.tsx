import React, { useEffect } from "react";
import MapMarker from "./MapMarker";
import { PlaceType } from "./mapTypes";
import { useMap } from "../hooks/useMap";

interface MapMarkerControllerProps {
  places: PlaceType[];
  SelectedPlaceId?: string;
}

const MapMarkerController = (props: MapMarkerControllerProps) => {
  const map = useMap();

  useEffect(() => {
    if (props.places.length < 1) {
      return;
    }

    const bounds = new window.kakao.maps.LatLngBounds();
    props.places.forEach(place => {
      bounds.extend(place.position);
    });

    map.setBounds(bounds);
  }, [props.places]);

  return (
    <>
      {props.places.map((place, index) => (
        <MapMarker
          key={place.id}
          index={index}
          place={place}
          showInfo={props.SelectedPlaceId === place.id}
        />
      ))}
    </>
  );
};

export default MapMarkerController;
