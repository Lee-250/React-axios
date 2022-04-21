import { Heading, GridCol, Button, ButtonArrow, BackLink, Breadcrumbs} from 'govuk-react';
import {useNavigate} from "react-router-dom";
import InputAppointmentDate from './InputAppointmentDate';
import NoChoiceError from './NoChoiceError';
import {useState} from 'react';


const AppointmentDate = ({date, setDate, type}) => {

  const navigate = useNavigate()
  const [noChoice, setnoChoice] = useState(false);

  const nextPage = () => {
    if (date === '') {
      setnoChoice(true)
    }else if (type === 'Training' && date!='') {
        setnoChoice(false)
        navigate("../payment");
      return // do nothing
    } else {
      navigate("../checkdetails"); // navigate to the page
    }
  }

  const previousPage = () => {
    navigate("../email");
  }
    return (
        <div>
            <GridCol setWidth="two-thirds">
            <Breadcrumbs>
            <Breadcrumbs.Link href="../">
              Home
            </Breadcrumbs.Link>
            <Breadcrumbs.Link href="./name">
            Add your name
          </Breadcrumbs.Link>
          <Breadcrumbs.Link href="./email">
            Add your email
          </Breadcrumbs.Link>
          <Breadcrumbs.Link href="./type">
            Choose your appointment type
          </Breadcrumbs.Link>
          <Breadcrumbs>
            Choose your appointment date and time
          </Breadcrumbs>
        </Breadcrumbs>
            <br />
            <Heading size="LARGE">Please choose from an available {type} appointment:</Heading>
            {noChoice ? <NoChoiceError/> : null }
            
            <InputAppointmentDate date={date} setDate={setDate}/>
           
                <Button
                  icon={<ButtonArrow />}
                  start 
                  onClick={nextPage}
                >
                  Next
                </Button>

                <BackLink
                  href="#"
                  onClick={previousPage}
                >
                  Back
                </BackLink>
            </GridCol>
        </div>
    );
};

export default AppointmentDate;