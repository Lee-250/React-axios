import { Heading, InputField, GridCol, ButtonArrow, Button, BackLink, Breadcrumbs} from 'govuk-react';
import {Link, useNavigate} from "react-router-dom";
import InputName from "./InputName"


const Name = ({name, setName}) => {

  const navigate = useNavigate()


  const nextPage = () => {
    if (name === '') {
      return 
    } else {
      navigate("../email");
    }
  }

  const previousPage = () => {
      navigate("/");
    }
  

    return (
        <div> <GridCol setWidth="two-thirds">
        <Breadcrumbs>
            <Breadcrumbs.Link href="../">
              Home
            </Breadcrumbs.Link>
            <Breadcrumbs>
            Add your name
          </Breadcrumbs>
        </Breadcrumbs>
            <Heading size="XLARGE">What is your name?</Heading>
            <InputName name={name} setName={setName} />
            Name state here: {name}
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
            </GridCol> </div>
    );
};

export default Name;