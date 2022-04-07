import { Heading, InputField, GridCol, ButtonArrow, Button} from 'govuk-react';
import {Link, useNavigate} from "react-router-dom";
import InputEmail from "./InputEmail"
import validator from 'validator';

const Email = ({email, setEmail}) => {

  const navigate = useNavigate()

  const nextPage = () => {
    if (!validator.isEmail(email)) {
      return 
    } else {
      navigate("../type");
    }
  }

    return (
        <div> <GridCol setWidth="two-thirds">
            <Heading size="XLARGE">Please enter your email address</Heading>
            <InputEmail email={email} setEmail={setEmail} />
            Email state here: {email}
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

export default Email;