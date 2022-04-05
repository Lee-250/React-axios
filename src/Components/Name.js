import { Heading, InputField, GridCol, ButtonArrow, Button} from 'govuk-react';
import {Link} from "react-router-dom";


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
            <p></p>
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