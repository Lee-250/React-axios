import { Select } from "govuk-react";

const InputAppointmentType = ({type, setType}) => {
    return (
        <div>

            <Select
                input={{
                    name: 'group1',
                    onChange: (e) => {
                        console.log(e, "<---- event")
                        setType(e.target.value) 
                      }
                }}
                label="Appointment Type"
                >
                <option value="Consultation">
                    Consultation
                </option>
                <option value="Training">
                    Training
                </option>
                <option value="Apprenticeships">
                    Apprenticeships
                </option>
            </Select>

            </div>
    );
};

export default InputAppointmentType;