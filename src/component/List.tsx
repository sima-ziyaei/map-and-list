import React from "react";
import { FixedSizeList as List } from "react-window";
import { GeoCoordinate, Vehicle } from "../App";

interface Props {
  setClickedItem: (a: GeoCoordinate) => void;
  vehicles: Vehicle[];
  clickedMarkerIndex: number;
  setClickedMarkerIndex: (a: number) => void;
}

const VehiclesList = React.forwardRef<HTMLDataListElement, Props>(
  (
    { setClickedItem, setClickedMarkerIndex, clickedMarkerIndex, vehicles },
    itemsRef
  ) => {
    const data = vehicles.map((value, id) => ({
      id: id,
      title: value.plate,
      vin: value.vin,
      geoCoordinate: value.geoCoordinate,
    }));

    const renderRow = ({ index, key, style }) => {
      return (
        <div
          onClick={() => {
            setClickedItem(vehicles[index].geoCoordinate);
            setClickedMarkerIndex(index);
          }}
          key={key}
          style={style}
          className="mx-3 !h-[100px] cursor-pointer"
        >
          <h3
            className={` ${
              clickedMarkerIndex === index ? "bg-blue-300" : "bg-gray-500"
            }  w-[80%] rounded-full p-2 flex gap-4 items-center `}
          >
            <div className="bg-sky-600 text-black rounded-full w-8 h-8 flex items-center justify-center">
              {index + 1}
            </div>
            {`${data[index]?.title}`}
          </h3>
        </div>
      );
    };

    return (
      <div className="flex flex-col items-start gap-8">
        <h1 className="ml-3 text-2xl md:text-4xl ">Vehicles</h1>
        <List
          ref={itemsRef}
          width={400}
          height={750}
          itemCount={vehicles.length}
          itemSize={120}
          className=" !w-[200px] md:!w-[400px] !overflow-x-hidden list-container"
        >
          {renderRow}
        </List>
      </div>
    );
  }
);

export default VehiclesList;
