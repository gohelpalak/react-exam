import React from 'react';
import { BrowserRouter ,  Routes, Route } from 'react-router-dom';

import RoomList from './Pages/RoomList';
import ReservationForm from './Pages/ReservationForm';

import Home from './Pages/Home';


import Resevations from './Pages/Resevations';
import New_Reservation from './Pages/new_reservation';
import Login from './Pages/Login';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/Signup';
import {Provider} from 'react-redux'
import { store } from './redux/store';
// import { store } from './Redux/Store';
// 

const App = () => (
  
  <BrowserRouter>
   <Provider store={store}>
    <Home />
    <div className="container">
      <Routes>
        <Route path="/rooms" element={<RoomList />} />
        {/* <Route path="/ReservationForm" element={<ReservationForm/>} /> */}
       <Route path='/New_Reservation' element={<New_Reservation/>}/>
        <Route path="/ReservationForm" element={<ReservationForm/>}/>
        <Route path='/Resevations' element={<Resevations/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/Signup' element={<SignUp/>}/>
  
       
      </Routes>
    </div>
    </Provider>
  </BrowserRouter>
);

export default App;
