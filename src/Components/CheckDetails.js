import {useState} from 'react';
import { Table } from 'govuk-react';
import { Heading, Button, ButtonArrow } from 'govuk-react';
import { Link } from 'react-router-dom';
import Expandable from './Expandable';
import InputName from './InputName';
import InputEmail from './InputEmail';
import InputAppointmentType from './InputAppointmentType';
import InputAppointmentDate from './InputAppointmentDate';



const CheckDetails = ({name, setName, date, setDate, type, setType, email, setEmail}) => {
    const [isNameOpen, setIsNameOpen] = useState(false);
    const [isTypeOpen, setIsTypeOpen] = useState(false);
    const [isDateOpen, setIsDateOpen] = useState(false);
    const [isEmailOpen, setIsEmailOpen] = useState(false);

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
        {isNameOpen ? <Table.Row><InputName name={name} setName = {setName} /></Table.Row> : null}

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
        {isEmailOpen ? <Table.Row><InputEmail email={email} setEmail={setEmail} /></Table.Row> : null}

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
        {isTypeOpen ? <Table.Row><InputAppointmentType type={type} setType={setType}/></Table.Row> : null}


        <Table.Row>
            <Table.Cell>
            <b>Date & Time</b>
            </Table.Cell>
            <Table.Cell>
            {date}
            </Table.Cell>
            <Link onClick={() => toggleIsOpen('date')} to="#">
                <Table.Cell>
                    Change
                </Table.Cell>
            </Link>
        </Table.Row>
        {isDateOpen ? <Table.Row><InputAppointmentDate date={date} setDate={setDate} /></Table.Row> : null}
        </Table>
        <Link to="../confirm"> 
            <Button
                  icon={<ButtonArrow />}
                  start
                  
                >
                  Submit
            </Button>
        </Link> 


        </div>
    );
};

export default CheckDetails;