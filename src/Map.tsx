import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ShowMarkers from "./ShowMarkers";
import React from "react";
import { GeoCoordinate, Vehicle } from "./App";

interface Props {
  vehicles: Vehicle[];
  clickedItem: GeoCoordinate;
  setClickedMarkerIndex: (a: number) => void;
}

const ShowMap = React.forwardRef<HTMLDataListElement, Props>(
  ({ clickedItem, vehicles, setClickedMarkerIndex }, itemsRef) => {

    return (
      <MapContainer
        center={[53.551086, 9.993682]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: "70%", height: "calc(100vh - 4rem)" }}
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"        />
        <ShowMarkers
          ref={itemsRef}
          vehicles={vehicles}
          clickedItem={clickedItem}
          setClickedMarkerIndex={setClickedMarkerIndex}
        />
      </MapContainer>
    );
  }
);

export default ShowMap;
