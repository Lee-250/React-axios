import Header from './Components/Header'
import Menu from './Components/Menu'
import logo from './sfclogo.png';
import './App.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import govukReact from 'govuk-react';
import {Label} from 'govuk-react';
import {Input} from 'govuk-react';
import StartPage from './Components/StartPage';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [apiData, setapiData] = useState("")
  const apiUrl = "https://skillsforcare-api.herokuapp.com"   
  
  useEffect(() => {
    axios.get(`${apiUrl}/api/notes`)
    .then(response_from_api => {
      console.log(response_from_api)
      // apiData = response_from_api.data[0].title
      setapiData(response_from_api.data[2].title)
      
      
      
    })
    .catch(err => {
      console.log(err)
    })
  }, []);  

  
    const [name, setName] = useState("Joe");

    const handleSubmit = (event) => {
      event.preventDefault();
     axios.post(`${apiUrl}/api/notes`, {
      title: name,
      content: "it worked"
     })
     .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    }

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
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
