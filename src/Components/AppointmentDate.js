import { Heading, Select, GridCol, Button, ButtonArrow} from 'govuk-react';
import {Link} from "react-router-dom";


const AppointmentDate = ({date, setDate, type}) => {
    return (
        <div>
            <GridCol setWidth="two-thirds">
            <br />
            <Heading size="LARGE">Please choose from an available {type} appointment:</Heading>
            <p>You have chosen: {type}</p>
            <Select
                input={{
                    name: 'group2',
                    onChange: (e) => {
                        console.log(e, "<---- event")
                        setDate(e.target.value) 
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
            <Link to="/checkdetails"> 
                <Button
                  icon={<ButtonArrow />}
                  start
                >
                  Next
                </Button>
              </Link> 
              <p>
                   stuff is working: {date}
              </p>
           
            </GridCol>
        </div>
    );
};

export default AppointmentDate;