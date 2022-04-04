import { Heading, Select, GridCol, Button, ButtonArrow} from 'govuk-react';
import {Link} from "react-router-dom";



const AppointmentType = ({type, setType}) => {
    return (
        <div>
            <GridCol setWidth="two-thirds">
            <Heading size="XLARGE">Please choose the type of appointment you require:</Heading>
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
            <Link to="/name"> 
                <Button
                  icon={<ButtonArrow />}
                  start
                >
                  Start now
                </Button>
              </Link> 
              <p>
                  type state here: {type}
              </p>
           
            </GridCol>
        </div>
    );
};

export default AppointmentType;