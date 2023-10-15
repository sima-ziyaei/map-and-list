import React, { useEffect, useState } from "react";
import "./App.css";
import VehiclesList from "./List";
import ShowMap from "./Map";
import axios from "axios";

export interface Vehicle {
  address: string;
  buildSeries: string;
  charging: boolean;
  freeForRental: boolean;
  fuelLevel: number;
  fuelType: string;
  geoCoordinate: GeoCoordinate;
  globalVersion: number;
  hardwareVersion: string;
  locationAlias: string;
  locationId: number;
  parkingId: string;
  plate: string;
  primaryColor: string;
  vin: string;
}

export interface GeoCoordinate {
  latitude: number;
  longitude: number;
}

function App() {
  const [clickedItem, setClickedItem] = useState<GeoCoordinate>();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [clickedMarkerIndex, setClickedMarkerIndex] = useState<number>();
  const itemsRef = React.createRef<HTMLDataListElement>();

  useEffect(() => {
    axios.get("vehicles.json").then((res) => {
      setVehicles(res.data);
    });
  }, []);

  return (
    <div className="flex w-[99vw] overflow-x-hidden">
      <ShowMap
        setClickedMarkerIndex={setClickedMarkerIndex}
        ref={itemsRef}
        clickedItem={clickedItem}
        vehicles={vehicles}
      />
      <VehiclesList
        setClickedMarkerIndex={setClickedMarkerIndex}
        clickedMarkerIndex={clickedMarkerIndex}
        ref={itemsRef}
        setClickedItem={setClickedItem}
        vehicles={vehicles}
      />
    </div>
  );
}

export default App;
