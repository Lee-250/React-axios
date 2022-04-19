import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

import Header from './Components/Header'
import Menu from './Components/Menu'
import BookingForm from './Components/BookingForm';
import StartPage from './Components/StartPage';
import Calendar from "./Components/Calendar";


function App() {

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
            <Route path="/bookingform/*" element={<BookingForm/>} />
            <Route path="/calendar" element={<Calendar />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
