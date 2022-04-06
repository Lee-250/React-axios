import React, { useState } from 'react'
import { Table } from 'govuk-react';
import { Link } from 'react-router-dom';

export default function Expandable({children}) {

const [isOpen, setIsOpen] = useState(false)

const toggleIsOpen = () => {
    setIsOpen((currOpen) => !currOpen)
}

  return (
    <div>
        {/* <button onClick={toggleIsOpen}>
            {isOpen ?  "Close" : "Open"}
        </button> */}
            <Table.Cell onClick={toggleIsOpen} >
                Change
            </Table.Cell>
        <Table.Row>something</Table.Row>
        {isOpen ? children : null}

    </div>
  )
}
