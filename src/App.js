import Header from './Components/Header'
import Confirmation from './Components/Confirmation';
import CheckDetails from './Components/CheckDetails';
import Menu from './Components/Menu'
import Name from './Components/Name'
import BookingForm from './Components/BookingForm';
import AppointmentType from './Components/AppointmentType';
import AppointmentDate from './Components/AppointmentDate';
import './App.css';
import React, { useState } from 'react';
import StartPage from './Components/StartPage';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");

  return (

    <BrowserRouter>
        <Header/>
      <div className='content-container'>
          <div className='content-column-1'>
            <Menu/>
          </div>
        <div className='content-column-2'>
            <Routes>
            <Route path="/" element={<StartPage />} />
            {/* <Route path="/name" element={<Name name={name} setName={setName}/>} />
            <Route path="/type" element={<AppointmentType type={type} setType={setType}/>} />
            <Route path="/date" element={<AppointmentDate date={date} setDate={setDate} type={type}/>} /> */}
            <Route path="/checkdetails" element={<CheckDetails name={name} date={date} type={type}/>} />
            <Route path="/bookingform/*" element={<BookingForm/>} />
            
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
