import { Heading, InputField, GridCol, ButtonArrow, Button} from 'govuk-react';
import {Link} from "react-router-dom";
import FunctionalRendering from './FunctionalRendering';


const Name = ({name, setName}) => {
    return (
        <div> <GridCol setWidth="two-thirds">
            <Heading size="XLARGE">What is your name?</Heading>
            <InputField
                input={{
                        name: 'group0',
                        value: name,
                        onChange: (e) => {
                          console.log(e, "<---- event")
                          setName(e.target.value) 
                        }
                    }}
                    >
                    Name
            </InputField>
            <FunctionalRendering></FunctionalRendering>
            <Link to="/category"> 
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