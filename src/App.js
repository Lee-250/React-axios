
import './App.css';
// import axios from "axios";
// import React, { useState, useEffect } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import StartPage from './Components/StartPage';
import Info from './Components/Info';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
