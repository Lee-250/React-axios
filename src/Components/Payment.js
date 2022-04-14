import { Heading, InputField, GridCol, ButtonArrow, Button, BackLink, Breadcrumbs} from 'govuk-react';
import {Link, useNavigate} from "react-router-dom";
import {useState, useEffect} from 'react';
import BlankFieldError from './BlankFieldError';
import InputPayment from './InputPayment';


const Payment = ({payment, setPayment}) => {

  const navigate = useNavigate()
  const [blankField, setblankField] = useState(false);



  const nextPage = () => {
    if (payment === '') {
      setblankField(true)
      return 
    } else {
      navigate("../checkdetails");
    }
  }

  const previousPage = () => {
      navigate("/");
    }
  

    return (
        <div>
          <GridCol setWidth="two-thirds">
        <Breadcrumbs>
            <Breadcrumbs.Link href="../">
              Home
            </Breadcrumbs.Link>
            <Breadcrumbs>
            Make payment
          </Breadcrumbs>
        </Breadcrumbs>



            <Heading size="XLARGE">Enter card details</Heading>
            {blankField ? <BlankFieldError/> : null }
            <InputPayment payment={payment} setPayment={setPayment} />
            <br></br>
            <br></br>

           

                <Button
                  icon={<ButtonArrow />}
                  start
                  onClick={nextPage}
                >
                  Next 
                </Button>
                
                <BackLink
                  href="#"
                  onClick={previousPage}
                >
                  Back
                </BackLink>
            </GridCol> </div>
    );
};

export default Payment;