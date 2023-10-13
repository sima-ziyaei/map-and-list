import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ShowMap = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "calc(100vh - 4rem)" }}
    >
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default ShowMap;
