import React from "react";
const Name = (props) => {
  const { data, handleChange, next } = props;
  return (
    <form>
      <p>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
      </p>
      
      <button onClick={next}>Next</button>
    </form>
  );
};
export default Name;