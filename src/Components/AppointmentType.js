import { Heading, Select, GridCol, Button, ButtonArrow} from 'govuk-react';
import {Link} from "react-router-dom";
import InputAppointmentType from './InputAppointmentType';



const AppointmentType = ({type, setType}) => {
    return (
        <div>
            <GridCol setWidth="two-thirds">
            <Heading size="XLARGE">Please choose the type of appointment you require:</Heading>
           <InputAppointmentType type={type} setType={setType} />
            <Link to="../date"> 
                <Button
                  icon={<ButtonArrow />}
                  start
                >
                  Next
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