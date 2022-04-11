import { Heading, InputField, GridCol, ButtonArrow, Button} from 'govuk-react';
import {Link, useNavigate} from "react-router-dom";
import InputEmail from "./InputEmail"
import validator from 'validator';
import EmailError from './EmailError';
import BlankFieldError from './BlankFieldError';
import {useState, useEffect} from 'react';

const Email = ({email, setEmail}) => {

  const [blankField, setblankField] = useState(false);
  const [badEmail, setbadEmail] = useState(false);

  const navigate = useNavigate()

  const nextPage = () => {
    if (!validator.isEmail(email)) {
      setbadEmail(true)
      return 
    } else if (email === ''){
      setblankField(true)
      return
    }
    else {
      navigate("../type");
    }
  }

    return (
        <div> <GridCol setWidth="two-thirds">
            <Heading size="XLARGE">Please enter your email address</Heading>
            <InputEmail email={email} setEmail={setEmail} />
            Email state here: {email}
            {blankField ? <BlankFieldError/> : null }
            {badEmail ? <EmailError/> : null }
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