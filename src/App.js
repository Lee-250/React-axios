import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';

function App() {
  const [apiData, setapiData] = useState("")
  
  useEffect(() => {
    axios.get("https://sleepy-sands-79356.herokuapp.com/api/notes")
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
     axios.post('https://sleepy-sands-79356.herokuapp.com/api/notes', {
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

      <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
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
