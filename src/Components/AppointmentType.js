import { Heading, Select, GridCol, Button, ButtonArrow} from 'govuk-react';
import {Link, useNavigate} from "react-router-dom";
import InputAppointmentType from './InputAppointmentType';



const AppointmentType = ({type, setType}) => {

  const navigate = useNavigate()

  const nextPage = () => {
    if (type === '') {
      return // do nothing
    } else {
      navigate("../date"); // navigate to the page
    }
  }

    return (
        <div>
            <GridCol setWidth="two-thirds">
            <Heading size="XLARGE">Please choose the type of appointment you require:</Heading>
            <InputAppointmentType type={type} setType={setType} />
            
                <Button
                  icon={<ButtonArrow />}
                  start
                  onClick={nextPage}
                >
                  Next
                </Button>
             
              <p>
                  type state here: {type}
              </p>
           
            </GridCol>
        </div>
    );
};

export default AppointmentType;