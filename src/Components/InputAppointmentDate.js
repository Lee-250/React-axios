import React, { useEffect, useState } from "react";
import axios from "axios";
import { Select } from "govuk-react";
import { display_date_to_user } from '../utils/datetime';

const defaultDateChoices = [
  "2022-04-25T14:00",
  "2022-04-26T15:00",
  "2022-04-27T16:00",
];

const datetime_source_url = "https://skillsforcare-api.herokuapp.com/api/timeslots";

const InputAppointmentDate = ({ date, setDate }) => {
  const [date_choices, set_date_choices] = useState(defaultDateChoices);

  useEffect(() => {
    axios.get(datetime_source_url).then((res) => {
      set_date_choices(res.data);
    }).catch((err) => {
      console.error("error in retrieving date choices from backend.")
      console.error(err);
    });
  }, [])

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
        <option key="default" value="" disabled>
          Please choose from below
        </option>
        {date_choices.map((date_value, i) => (
          <option key={i} value={date_value}>{display_date_to_user(date_value)}</option>
        ))}
      </Select>
    </div>
  );
};

export default InputAppointmentDate;
