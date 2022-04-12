import { Heading, Select, GridCol, Button, ButtonArrow} from 'govuk-react';
import {Link, useNavigate} from "react-router-dom";
import InputAppointmentType from './InputAppointmentType';
import {useState, useEffect} from 'react';
import NoChoiceError from './NoChoiceError';



const AppointmentType = ({type, setType}) => {

  const [noChoice, setnoChoice] = useState(false);
  const navigate = useNavigate()

  const nextPage = () => {
    if (type === '') {
      setnoChoice(true)
      return // do nothing
    } else {
      navigate("../date"); // navigate to the page
    }
  }

    return (
        <div>
            <GridCol setWidth="two-thirds">
            <Heading size="XLARGE">Please choose the type of appointment you require:</Heading>
            {noChoice ? <NoChoiceError/> : null }
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