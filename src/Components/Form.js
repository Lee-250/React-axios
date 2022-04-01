import React, {useState} from "react";
import Name from "./Name";
import Contact from "./Contact";
import Appointment from "./Appointment";
import Submit from "./Submit";

const Form = () => {
const [currentPage, setCurrentPage] = useState(1);
const [formData, setFormData] = useState({name: "", email: "", telephoneNo: "", apptDateTime:"" });
const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const next = () => {
    setCurrentPage(currentPage + 1);
  };
  const back = () => {
    setCurrentPage(currentPage - 1);
  };
  switch (currentPage) {
    case 1:
      return (
        <Name
          data={formData} 
          handleChange={handleChange} 
          next={next} 
        />
      );
    case 2:
      return (
        <Contact
          data={formData}
          handleChange={handleChange}
          next={next}
          back={back}
        />
      );
    case 3:
      return (
        <Appointment
          data={formData}
          handleChange={handleChange}
          next={next}
          back={back}
        />
      );
    default:
      return <Submit data={formData} back={back} />;
  };
}
 
export default Form;