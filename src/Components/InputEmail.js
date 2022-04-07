import { InputField } from 'govuk-react';
import validator from 'validator';
import { useState } from 'react';



const InputEmail = ({email, setEmail}) => {

    // const [emailError, setEmailError] = useState('')
    // const validateEmail = (e) => {
    //   var email = e.target.value
    
    //   if () {
    //     setEmailError('Valid Email :)')
    //   } else {
    //     setEmailError('Enter valid Email!')
    //   }
    // }
    
    return (
        <div>
            <InputField
                input={{
                        name: 'group0',
                        value: email,
                        onChange: (e) => {
                          
                          setEmail(e.target.value) 
                        },
                        required: true
                    }}
                    >
                    Email
            </InputField>
            {/* <p>email error here</p>
            {emailError} */}
            
        </div>
    );
};

export default InputEmail;