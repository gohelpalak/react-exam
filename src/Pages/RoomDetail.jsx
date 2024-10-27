import React from 'react';

const RoomDetail = ({ room }) => (
  <div style={{backgroundColor:"darkgrey"}}>
    <h3>{room.name}</h3>
    <p>Type: {room.type}</p>
    <p>Price: ${room.price}</p>
  </div>
);

export default RoomDetail;
