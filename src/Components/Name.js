import { Heading, InputField, GridCol, ButtonArrow, Button} from 'govuk-react';
import {Link, useNavigate} from "react-router-dom";
import InputName from "./InputName"


const Name = ({name, setName}) => {

  const navigate = useNavigate()


  const nextPage = () => {
    if (name === '') {
      return 
    } else {
      navigate("../type");
    }
  }

    return (
        <div> <GridCol setWidth="two-thirds">
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
            </GridCol> </div>
    );
};

export default Name;