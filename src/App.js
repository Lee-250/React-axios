import Header from './Components/Header'
import logo from './sfclogo.png';
import './App.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import govukReact from 'govuk-react';
import {Label} from 'govuk-react';
import {Input} from 'govuk-react';


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
    <div className="App">
      <Header/>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
       
        <div class="govuk-form-group">
          <Label class="govuk-label" for="full-name">
            Full name:
          </Label>
          <Input class="govuk-input" id="full-name" name="full-name" type="text" spellcheck="false" autocomplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        
      <button className="button-colour">Test</button>

      <form onSubmit={handleSubmit}>
      <label>
        Name:
        <Input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
      </form>
      
      <p> Data appears here: {apiData} </p>
      <p> name appears here: {name} </p>
      </header>
    </div>
  );
}

export default App;
