import { Heading, Select, GridCol, Button, ButtonArrow, BackLink, Breadcrumbs} from 'govuk-react';
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
          <Breadcrumbs>
            Choose your appointment type
          </Breadcrumbs>
        </Breadcrumbs>
            <Heading size="XLARGE">Please choose the type of appointment you require:</Heading>
            <InputAppointmentType type={type} setType={setType} />
            
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
             
              <p>
                  type state here: {type}
              </p>
           
            </GridCol>
        </div>
    );
};

export default AppointmentType;