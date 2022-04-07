import CheckDetails from './CheckDetails';
import Confirmation from './Confirmation';
import Name from './Name'
import Email from './Email'
import AppointmentType from './AppointmentType';
import AppointmentDate from './AppointmentDate';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

const BookingForm = () => {
   
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");

  
  return (

    
        
            <Routes>
            <Route path="/" element={<Navigate to="name"/>}/>
            <Route path="/name" element={<Name name={name} setName={setName}/>} />
            <Route path="/email" element={<Email email={email} setEmail={setEmail}/>} />
            <Route path="/type" element={<AppointmentType type={type} setType={setType}/>} />
            <Route path="/date" element={<AppointmentDate date={date} setDate={setDate} type={type}/>} />
            <Route path="/checkdetails" element={<CheckDetails name={name} setName={setName} date={date} setDate={setDate} type={type} setType={setType} email={email} setEmail={setEmail}/>} />
            <Route path="/confirm" element={<Confirmation/>} />
            </Routes>
    
  );
};

export default BookingForm;