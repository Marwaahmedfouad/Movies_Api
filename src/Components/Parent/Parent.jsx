import React from 'react';
import { useState } from "react";
import Child from "../Child/Child";
const Parent = () => {
    const [data, setData] = useState("");
    const handleDataChange = (newData) => {
      setData(newData);
    };
    return (
      <div>
        <p>Data: {data}</p>
        <Child onDataUpdate={handleDataChange} />
      </div>
    );
}
export default Parent;