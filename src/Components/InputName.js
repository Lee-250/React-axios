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
                        },
                        required: true, value: name
                    }}
                    >
                    Name
            </InputField>
            
        </div>
    );
};

export default InputName;