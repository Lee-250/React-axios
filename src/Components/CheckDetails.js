import {useState, useEffect} from 'react';
import { BackLink, Table } from 'govuk-react';
import { Heading, Button, ButtonArrow } from 'govuk-react';
import {Link, useNavigate} from "react-router-dom";
import InputName from './InputName';
import InputEmail from './InputEmail';
import InputAppointmentType from './InputAppointmentType';
import InputAppointmentDate from './InputAppointmentDate';
import Error from './Error';
import emailjs from "emailjs-com"
import axios from 'axios';
import { display_date_to_user } from '../utils/datetime';





const CheckDetails = ({name, setName, date, setDate, type, setType, email, setEmail}) => {
    const [isNameOpen, setIsNameOpen] = useState(false);
    const [isTypeOpen, setIsTypeOpen] = useState(false);
    const [isDateOpen, setIsDateOpen] = useState(false);
    const [isEmailOpen, setIsEmailOpen] = useState(false);
    const [isError, setIsError] = useState(false);

    const previousPage = () => {
        navigate("../date");
      }

    const toggleIsOpen = (nameOfState) => {
        if (nameOfState === 'name') {
            setIsNameOpen(curr => !curr)
        } else if (nameOfState === 'type') {
            setIsTypeOpen(curr => !curr)
        } else if (nameOfState === 'date') {
            setIsDateOpen(curr => !curr)
        } else if (nameOfState === 'email') {
            setIsEmailOpen(curr => !curr)
        }
    }


    const sendEmail = () => {
        //e.preventDefault();

        emailjs.send('service_y3f9uc8', 'template_tetqjwc', {name: name, type: type, date: date, email: email}, 'JgecEVmPlFa_In6lj')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    };

    const apiUrl = "https://skillsforcare-api.herokuapp.com"   
  
    useEffect(() => {
      axios.get(`${apiUrl}/api/appointment`)
      .then(response_from_api => {
        console.log(response_from_api)
        // apiData = response_from_api.data[0].title
      })
      .catch(err => {
        console.log(err)
      })
    }, []);  
  
    
     
  
      const handleSubmit = (event) => {
        event.preventDefault();
       axios.post(`${apiUrl}/api/appointment`, {
        name: name, type: type, date: date, email: email
       })
       .then(function (response) {
        sendEmail();
        console.log(response);
        navigate('../confirm')
      })
      .catch(function (error) {
        console.log(error);
        setIsError(true)
        
      });
      }

      
      const navigate = useNavigate()
    return (
        <div>
            <Heading size="LARGE">Check your details are correct</Heading>
        <Table>
        
        <Table.Row>
            <Table.Cell>
            <span style={{fontWeight: "bold"}}>Name:</span>
            </Table.Cell>
            <Table.Cell>
            {name}
            </Table.Cell>
            <Link onClick={() => toggleIsOpen('name')} to="#">
                <Table.Cell>
                    Change
                </Table.Cell>
            </Link>
        </Table.Row>
        {isNameOpen ? <Table.Row><td colspan={2}><InputName name={name} setName={setName} /></td></Table.Row> : null}

        <Table.Row>
            <Table.Cell>
            <span style={{fontWeight: "bold"}}>Email:</span>
            </Table.Cell>
            <Table.Cell>
            {email}
            </Table.Cell>
            <Link onClick={() => toggleIsOpen('email')} to="#">
                <Table.Cell>
                    Change
                </Table.Cell>
            </Link>
        </Table.Row>
        {isEmailOpen ? <Table.Row><td colspan={2}><InputEmail email={email} setEmail={setEmail} /></td></Table.Row> : null}

        <Table.Row>
            <Table.Cell>
                <b>
                Type:
                </b>
            
            </Table.Cell>
            <Table.Cell>
            {type}
            </Table.Cell>
            <Link onClick={() => toggleIsOpen('type')} to="#">
                <Table.Cell>
                    Change
                </Table.Cell>
            </Link>
        </Table.Row>
        {isTypeOpen ? <Table.Row><td colspan={2}><InputAppointmentType type={type} setType={setType}/></td></Table.Row> : null}


        <Table.Row>
            <Table.Cell>
            <b>Date & Time</b>
            </Table.Cell>
            <Table.Cell>
            {display_date_to_user(date)}
            </Table.Cell>
            <Link onClick={() => toggleIsOpen('date')} to="#">
                <Table.Cell>
                    Change
                </Table.Cell>
            </Link>
        </Table.Row>
        {isDateOpen ? <Table.Row><td colspan={2}><InputAppointmentDate date={date} setDate={setDate} /></td></Table.Row> : null}
        </Table>
       {isError ? <Error/> : null }
            <Button
                  icon={<ButtonArrow />}
                  start
                   onClick={handleSubmit}> Submit</Button>
        <br></br>
        <BackLink
                  href="#"
                  onClick={previousPage}
                >
                  Back
                </BackLink>


        </div>
    );
};

export default CheckDetails;