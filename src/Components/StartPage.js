import React from 'react'
import {InputField, Heading, LeadParagraph, InsetText, Breadcrumbs, SectionBreak, ButtonArrow, Button} from 'govuk-react';

import {Link} from "react-router-dom";
import Header from './Header';
import Menu from './Menu';

export default function StartPage() {
  return (
    <div className='app'>
        <Header/>
        <div className='content-container'>
        <div className='content-column-one'>
          <Menu/>
        </div>
        <div className='content-column-two'>
        <Breadcrumbs>
          <Breadcrumbs.Link href="/section">
            Skills for Care Home
          </Breadcrumbs.Link>
          <Breadcrumbs.Link href="/section/sub-section">
            Appointment
          </Breadcrumbs.Link>
          Current page
        </Breadcrumbs>
        <Heading size="LARGE">
          Book an Appointment
        </Heading>
        <SectionBreak
            level="LARGE"
            visible
          />
        <LeadParagraph>
          Find an appointment with Skills for Care
        </LeadParagraph>
        <Link to="/info">
          <Button
              icon={<ButtonArrow />}
              start
              >
              Start now
          </Button>
        </Link>
        
        </div>
      </div>
    </div>
  )
}
