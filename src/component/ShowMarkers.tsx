import React, { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import * as L from "leaflet";
import { GeoCoordinate, Vehicle } from "../App";

interface Props {
  vehicles: Vehicle[];
  clickedItem: GeoCoordinate;
  setClickedMarkerIndex: (a: number) => void;
}

const ShowMarkers = React.forwardRef<HTMLDataListElement, Props>(
  ({ clickedItem, vehicles, setClickedMarkerIndex }, itemsRef) => {
    
    const carIcon = L.icon({
      iconUrl: "./assets/car.png",
      shadowUrl: "./assets/car.png",
      iconSize: [33, 30],
      shadowSize: [0, 0],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76],
    });

    const map = useMap();
    useEffect(() => {
      if (clickedItem) {
        map.setView(
          [
            clickedItem?.latitude,
            clickedItem?.longitude,
          ],
          50
        );
      }
    }, [clickedItem]);

    return vehicles.map((el, i) => {
      return (
        <Marker
          icon={carIcon}
          key={i}
          eventHandlers={{
            click: (e) => {
              if (itemsRef != null && typeof itemsRef !== "function") {
                itemsRef.current.scrollToItem(i, "center");
                setClickedMarkerIndex(i);
                map.setView(
                  [el.geoCoordinate?.latitude, el.geoCoordinate?.longitude],
                  50
                );
              }
            },
          }}
          position={[el.geoCoordinate.latitude, el.geoCoordinate.longitude]}
        >
          <Popup>
            {Object.entries(el).map((item, i) => (
              <p key={i}>{`${item[0]}:${item[1]}`}</p>
            ))}
          </Popup>
        </Marker>
      );
    });
  }
);

export default ShowMarkers;
