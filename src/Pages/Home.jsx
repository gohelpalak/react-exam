import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => (
  <nav className="navbar navbar-expand-lg  sticky-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">Hotel Management</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item"><Link className="nav-link" to="/rooms">Rooms</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/Resevations">Reservations</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/New_Reservation">New Reservation</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/Login">Login</Link></li>
      </ul>
      <div>
      <ul className='navbar-nav ml-auto'>
        <li className="nav-item"><Link className='nav-link' to="/ReservationForm">ReservationForm</Link></li>
        <li className='nav-link'><Link className='nav-link' to="/Signup">SignUp</Link></li>
        <li className='nav-link'><Link className='nav-link' to="/SignIn">SignIn</Link></li>
      </ul>
      </div>
    </div>
    
  </nav>

  
);

export default Home;
