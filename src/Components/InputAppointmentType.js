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
                      },
                      required: true, value: type
                }}
                label="Appointment Type"
                >
                <option value="" disabled>
                    Please choose from below
                </option>
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