import { Heading, Select, GridCol, Button, ButtonArrow} from 'govuk-react';
import {Link, useNavigate} from "react-router-dom";
import InputAppointmentDate from './InputAppointmentDate'

const AppointmentDate = ({date, setDate, type}) => {

  const navigate = useNavigate()

  const nextPage = () => {
    if (date === '') {
      return // do nothing
    } else {
      navigate("../checkdetails"); // navigate to the page
    }
  }
    return (
        <div>
            <GridCol setWidth="two-thirds">
            <br />
            <Heading size="LARGE">Please choose from an available {type} appointment:</Heading>
            <p>You have chosen: {type}</p>
            <InputAppointmentDate date={date} setDate={setDate}/>
           
                <Button
                  icon={<ButtonArrow />}
                  start 
                  onClick={nextPage}
                >
                  Next
                </Button>
              
              <p>
                   stuff is working: {date}
              </p>
           
            </GridCol>
        </div>
    );
};

export default AppointmentDate;