import React, { useState } from "react";
import "./App.css";
import VehiclesList from "./List";
import ShowMap from "./Map";

function App() {
  const [clickedItem,setClickedItem] = useState();
  const [vehicles, setVehicles] = useState([]);
  const itemsRef = React.createRef<HTMLDataListElement>();
  return (
    <div className="flex w-[99vw] overflow-x-hidden">
      <ShowMap ref={itemsRef} clickedItem={clickedItem} vehicles={vehicles} />
      <VehiclesList ref={itemsRef} setClickedItem={setClickedItem} setVehicles={setVehicles} vehicles={vehicles} />
    </div>
  );
}

export default App;
