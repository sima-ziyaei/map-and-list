import axios from "axios";
import React, { useEffect } from "react";
import { FixedSizeList as List } from "react-window";

interface Props {
  setVehicles: (a) => void;
  setClickedItem: (a) => void;
  vehicles: any;
}

const VehiclesList = React.forwardRef<HTMLDataListElement, Props>(({ setClickedItem, setVehicles, vehicles }, itemsRef) => {

    // useEffect(() => {
    //   if (itemsRef != null && typeof itemsRef !== "function") {
    //     itemsRef.current === itemsRef.current;
    //   }
    // }, []);

    useEffect(() => {
      axios.get("vehicles.json").then((res) => {
        console.log(res.data);
        setVehicles(res.data);
      });
    }, []);


    const data = vehicles.map((value, id) => ({
      id: id,
      title: value.plate,
      vin: value.vin,
      geoCoordinate: value.geoCoordinate,
    }));

    const renderRow = ({ index }) => {
      return (
        <div
          onClick={() => setClickedItem(data[index])}
          key={index}
          
          className="mx-3 !h-[100px] cursor-pointer"
        >
          <h3 className="bg-gray-500 w-[80%] rounded-full p-2 flex gap-4 items-center ">
            <div className="bg-sky-600 text-black rounded-full w-8 h-8 flex items-center justify-center">
              {index}
            </div>
            {`${data[index]?.title}`}
          </h3>
        </div>
      );
    };

    return (
      <div className="flex flex-col items-start gap-8">
        <h1 className="ml-3">Vehicles</h1>
        <List
          ref={itemsRef}
          width={400}
          height={750}
          itemCount={vehicles.length}
          itemSize={120}
          className=" !overflow-x-hidden"
        >
          {renderRow}
        </List>
      </div>
    );
  }
);

export default VehiclesList;
