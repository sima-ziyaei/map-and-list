import axios from "axios";
import { useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";

const VehiclesList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get("vehicles.json").then((res) => {
      setVehicles(res.data);
    });
  }, []);

  const data = vehicles.map((value, id) => ({
    id: id,
    title: value.plate,
  }));

  const renderRow = ({ index, key, style }) => {
    return (
      <div>
        <div key={key} style={style} className="">
          <h3>{`${data[index]?.title}`}</h3>
        </div>
      </div>
    );
  };

  return (
    <>
      <List
        width={400}
        height={700}
        itemCount={vehicles.length}
        itemSize={120}
      >
        {renderRow}
      </List>
    </>
  );
};

export default VehiclesList;
