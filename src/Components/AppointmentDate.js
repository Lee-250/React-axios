import { Heading, Select, GridCol, Button, ButtonArrow} from 'govuk-react';
import {Link} from "react-router-dom";
import InputAppointmentDate from './InputAppointmentDate'

const AppointmentDate = ({date, setDate, type}) => {
    return (
        <div>
            <GridCol setWidth="two-thirds">
            <br />
            <Heading size="LARGE">Please choose from an available {type} appointment:</Heading>
            <p>You have chosen: {type}</p>
            <InputAppointmentDate date={date} setDate={setDate}/>
            <Link to="../checkdetails"> 
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