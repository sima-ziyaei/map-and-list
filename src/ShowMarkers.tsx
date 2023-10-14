import React, { useEffect } from "react";
import { Marker, useMap } from "react-leaflet";

interface Props {
  vehicles: any;
  clickedItem: any;
}

const ShowMarkers = React.forwardRef<HTMLDataListElement, Props>(
  ({ clickedItem, vehicles }, itemsRef) => {
    const map = useMap();
    useEffect(() => {
      if (clickedItem) {
        map.setView(
          [
            clickedItem?.geoCoordinate?.latitude,
            clickedItem?.geoCoordinate?.longitude,
          ],
          50
        );
      }
    }, [clickedItem]);

    return vehicles.map((el, i) => {
      return (
        <Marker
          key={i}
          eventHandlers={{
            click: () => {
              if (itemsRef != null && typeof itemsRef !== "function") {
                itemsRef.current.scrollTo();
              }
            },
          }}
          // onClick={() => itemsRef != null && typeof itemsRef !== "function" ? itemsRef.current[i].scrollIntoView({ behavior: "smooth", block: "center" }) :null}
          position={[el.geoCoordinate.latitude, el.geoCoordinate.longitude]}
        ></Marker>
      );
    });
  }
);

export default ShowMarkers;
