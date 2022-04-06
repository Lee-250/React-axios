import React from 'react';
import { Select } from 'govuk-react';

const InputAppointmentDate = ({date, setDate}) => {
    return (
        <div>
            <Select
                input={{
                    name: 'group2',
                    onChange: (e) => {
                        setDate(e.target.value) 
                        console.log("called on change")
                      }
                }}
                label="Appointment Date and Time"
                >
                <option value="Monday 20th 2:00 pm">
                  Monday 20th 2:00 pm
                </option>
                <option value="Tuesday 21st 3:00 pm">
                  Tuesday 21st 3:00 pm
                </option>
                <option value="Wednesday 22nd 4:00 pm">
                  Wednesday 22nd 4:00 pm
                </option>
            </Select>
        </div>
    );
};

export default InputAppointmentDate;