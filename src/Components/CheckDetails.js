import React from 'react';
import { Table } from 'govuk-react';
import { Heading } from 'govuk-react';
import { Link } from 'react-router-dom';

const CheckDetails = ({name, date, type}) => {
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
           <Link to="/name">
                <Table.Cell>
                    Change
                </Table.Cell>
            </Link>
        </Table.Row>

        <Table.Row>
            <Table.Cell>
                <b>
                Type:
                </b>
            
            </Table.Cell>
            <Table.Cell>
            {type}
            </Table.Cell>
            <Link to="/type">
                <Table.Cell>
                    Change
                </Table.Cell>
            </Link>
        </Table.Row>

        <Table.Row>
            <Table.Cell>
            <b>Date & Time</b>
            </Table.Cell>
            <Table.Cell>
            {date}
            </Table.Cell>
            <Link to="/date">
                <Table.Cell>
                    Change
                </Table.Cell>
            </Link>
        </Table.Row>
        </Table>
        


        </div>
    );
};

export default CheckDetails;