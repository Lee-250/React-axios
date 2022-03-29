import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';

function App() {
  const [apiData, setapiData] = useState("")
  // let apiData = ''
  useEffect(() => {
    axios.get("https://sleepy-sands-79356.herokuapp.com/api/notes")
    .then(response_from_api => {
      console.log(response_from_api)
      // apiData = response_from_api.data[0].title
      setapiData(response_from_api.data[0].title)
      
      
      
      
    })
    .catch(err => {
      console.log(err)
    })
  }, []);  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <button className="button-colour">Test</button>
      <p> Data appears here: {apiData} </p>
      </header>
    </div>
  );
}

export default App;