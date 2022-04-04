import React from 'react';
import { Table } from 'govuk-react';
import { Heading } from 'govuk-react';

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
            <Table.Cell>
            Change
            </Table.Cell>
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
            <Table.Cell>
            Change
            </Table.Cell>
        </Table.Row>

        <Table.Row>
            <Table.Cell>
            <b>Date & Time</b>
            </Table.Cell>
            <Table.Cell>
            {date}
            </Table.Cell>
            <Table.Cell>
            Change
            </Table.Cell>
        </Table.Row>
        </Table>
        


        </div>
    );
};

export default CheckDetails;