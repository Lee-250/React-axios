import React from "react";
const Appointment = (props) => {
  const { data, handleChange, next, back } = props;
  return (
    <form>
      <p>
        <label htmlFor="apptDateTime">Appointment:</label>
        <input
          name="apptDateTime"
          value={data.apptDateTime}
          onChange={handleChange}
        ></input>
      </p>      
      <button onClick={back}>Back</button> 
      <button onClick={next}>Next</button>
    </form>
  );
};
export default Appointment;