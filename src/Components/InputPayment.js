import { InputField } from 'govuk-react';
import Cards from '../cards.png';



const InputPayment = ({payment, setPayment, carddetails, month, year, nameoncard, seccode, two}) => {
    return (
        <div>
            <InputField style={{ width:"450px"}}
                input={{
                        name: 'group0',
                        value: carddetails,
                        onChange: (e) => {
                          setPayment(e.target.value) 
                        },
                        required: true, value: carddetails
                    }}
                    >
                    <b>Card Number</b>
                    
                    
            </InputField>
           <img  width= '450px' src={Cards}></img> 
            <br></br>
            <br></br>

            <p><b>Expiry date</b></p>
                        <p>For example 10/25</p>

        <div className="expirydate-container">
            <InputField  style={{ width:"30px"}} 
                input={{
                        name: 'group0',
                        value: month,
                        onChange: (e) => {
                          setPayment(e.target.value) 
                        },
                        required: true, value: month
                    }} ><b>Month</b>
            </InputField>
              
  
                    <h1>/</h1>
           
           
            <InputField style={{ width:"30px" }}
            
                input={{
                        name: 'group0',
                        value1: year,
                        onChange: (e) => {
                          setPayment(e.target.value) 
                        },
                        required: true, value: year
                    }}
                    >
                    <b>Year</b>
                    
            </InputField>
          </div>
<br></br>
<br></br>
            <InputField style={{ width:"300px" }}
            
                input={{
                        name: 'group0',
                        value1: nameoncard,
                        onChange: (e) => {
                          setPayment(e.target.value) 
                        },
                        required: true, value: nameoncard
                    }}
                    >
                    <b>Name on card</b>
                    
            </InputField>

            <br></br>
<br></br>
<p><b>Card security code</b></p>
                    <p>The last 3 digits on the back of the card</p>
            <InputField style={{ width:"50px" }}
            
                input={{
                        name: 'group0',
                        value1: seccode,
                        onChange: (e) => {
                          setPayment(e.target.value) 
                        },
                        required: true, value: seccode
                    }}
                    >
                    
                    
            </InputField>
        </div>


        
           
            
    );
};

export default InputPayment;