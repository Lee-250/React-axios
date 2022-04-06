import React from 'react';
import { InputField } from 'govuk-react';

const InputName = ({name, setName}) => {
    return (
        <div>
            <InputField
                input={{
                        name: 'group0',
                        value: name,
                        onChange: (e) => {
                          setName(e.target.value) 
                        }
                    }}
                    >
                    Name
            </InputField>
            
        </div>
    );
};

export default InputName;