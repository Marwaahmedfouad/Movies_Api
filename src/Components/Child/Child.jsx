import React from 'react';
const Child = (props) => {
    const handleClick = () => {
        const newData = "New Data";
        props.onDataUpdate(newData);
      };
      return <button onClick={handleClick}>Update Data</button>;
}
export default Child;





  
