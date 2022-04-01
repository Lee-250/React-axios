import React from "react";
const Contact = (props) => {
  const { data, handleChange, next, back } = props;
  return (
    <form>
     <p>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </p>
      
      <button onClick={back}>Back</button> 
      <button onClick={next}>Next</button>
    </form>
  );
};
export default Contact;