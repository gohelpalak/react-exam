import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RoomDetail from './RoomDetail';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:5000/rooms');
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div style={{backgroundColor:"darkgray"}}>
        
      <h2>Room List</h2>
      {rooms.map(room => (
        <RoomDetail key={room.id} room={room} />
      ))}
      
    </div>
  );
};

export default RoomList;
