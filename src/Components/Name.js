import { Heading, InputField, GridCol, ButtonArrow, Button} from 'govuk-react';
import {Link, useNavigate} from "react-router-dom";
import InputName from "./InputName"
import {useState, useEffect} from 'react';
import BlankFieldError from './BlankFieldError';


const Name = ({name, setName}) => {

  const navigate = useNavigate()
  const [blankField, setblankField] = useState(false);



  const nextPage = () => {
    if (name === '') {
      setblankField(true)
      return 
    } else {
      navigate("../email");
    }
  }

    return (
        <div> <GridCol setWidth="two-thirds">
            <Heading size="XLARGE">What is your name?</Heading>
            <InputName name={name} setName={setName} />
            {blankField ? <BlankFieldError/> : null }
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