import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ShowMarkers from "./ShowMarkers";
import React from "react";

interface Props {
  vehicles:any;
  clickedItem:any
}

const ShowMap = React.forwardRef<HTMLDataListElement, Props>(({ clickedItem, vehicles }, itemsRef) => {
  // const carIcon = L.icon({
  //   iconUrl: '/assets/car.png',
  //   iconSize: [20, 40]
  // })
  return (
    <MapContainer
      center={[53.551086, 9.993682]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ width: "70%", height: "calc(100vh - 4rem)" }}
    >
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <ShowMarkers ref={itemsRef} vehicles={vehicles} clickedItem={clickedItem} />
    </MapContainer>
  );
});



export default ShowMap;
