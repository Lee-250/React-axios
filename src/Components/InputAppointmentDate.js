import React from "react";
import { Select } from "govuk-react";
import { display_date_to_user } from '../utils/datetime';

const defaultDateChoices = [
  "2022-04-25T14:00",
  "2022-04-26T15:00",
  "2022-04-27T16:00",
];

const InputAppointmentDate = ({ date, setDate }) => {
  const date_choices = defaultDateChoices;
  return (
    <div>
      <Select
        input={{
          name: "date_and_time",
          onChange: (e) => {
            setDate(e.target.value);
          },
          required: true,
          value: date,
        }}
        label="Appointment Date and Time"
      >
        <option value="" disabled>
          Please choose from below
        </option>
        {date_choices.map(date_value => (
          <option value={date_value}>{display_date_to_user(date_value)}</option>
        ))}
        {/* <option value="Monday 20th 2:00 pm">Monday 20th 2:00 pm</option>
        <option value="Tuesday 21st 3:00 pm">Tuesday 21st 3:00 pm</option>
        <option value="Wednesday 22nd 4:00 pm">Wednesday 22nd 4:00 pm</option> */}
      </Select>
    </div>
  );
};

export default InputAppointmentDate;
