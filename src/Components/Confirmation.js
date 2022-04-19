import {  Heading, Panel, Main, Table, Link } from 'govuk-react';
import { display_date_to_user } from '../utils/datetime';



const Confirmation = ({name, date, type, email}) => {
    return (
        
            <div>
            <Main>
                
            {/* <Heading>Booking Complete</Heading> */}
            
            <Panel title="Booking complete">
            
                Your reference number
                <br />
                <strong>
                    HDJ2123F
                </strong>
            </Panel>
            
            <Heading size="MEDIUM">Details entered</Heading>
            

        

           
            <Table>
        
                <Table.Row>
                    <Table.Cell>
                        <span style={{fontWeight: "bold"}}>Name:</span>
                       
                    </Table.Cell> 
                    <Table.Cell>
                        {name}
                       
                    </Table.Cell> 
                    
            
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                        <span style={{fontWeight: "bold"}}>Email:</span>
                    </Table.Cell> 
                    <Table.Cell>
                        {email}
                    </Table.Cell>                     
            
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                        <span style={{fontWeight: "bold"}}>Appointment Type:</span>
                    </Table.Cell> 
                    <Table.Cell>
                         {type}
                    </Table.Cell> 
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                        <span style={{fontWeight: "bold"}}>Appointment date and time:</span>
                    </Table.Cell> 
                    <Table.Cell>
                        {display_date_to_user(date)}
                    </Table.Cell> 
                </Table.Row>
            </Table>
             You can print or save this page as a pdf 
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        

        <Heading size="MEDIUM"> What happens next</Heading>
        <br></br>
        
        You have completed booking your appointment. If you have any questions or issues please call us on 0113 241 1275 
            </Main>
            
        </div>
    );
};

export default Confirmation;