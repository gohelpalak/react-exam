import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = () => {
  const [room, setRoom] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/reservations', {
        room,
        checkIn,
        checkOut,
      });
      console.log("Reservation made:", response.data);
    } catch (error) {
      console.error("Error making reservation:", error);
    }
  };

  return (
    <section className='login'>
      <div className='container-main'>
    <form onSubmit={handleSubmit} className="main-form">
      <div>
        <label>Room</label>
        <input type="text" value={room} onChange={(e) => setRoom(e.target.value)} />
      </div>
      <div>
        <label>Check-in</label>
        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
      </div>
      <div>
        <label>Check-out</label>
        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
      </div>
      <button type="submit">Make Reservation</button>
    </form>
    </div>
    </section>
  );
};

export default ReservationForm ;
