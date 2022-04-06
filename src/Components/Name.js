import { Heading, InputField, GridCol, ButtonArrow, Button} from 'govuk-react';
import {Link} from "react-router-dom";
import InputName from "./InputName"


const Name = ({name, setName}) => {
    return (
        <div> <GridCol setWidth="two-thirds">
            <Heading size="XLARGE">What is your name?</Heading>
            <InputName />
            Name state here: {name}
            <Link to="../type"> 
                <Button
                  icon={<ButtonArrow />}
                  start
                  
                >
                  Next
                </Button>
              </Link> 
            </GridCol> </div>
    );
};

export default Name;