import React from 'react';
import Header from './Header';
import Menu from './Menu';
import { Breadcrumbs, Heading, GridCol, GridRow, LeadParagraph, InsetText, Button, ButtonArrow } from 'govuk-react';
import {Link} from "react-router-dom";

const StartPage = () => {
    return (
        <div className='start-page'>
          <Breadcrumbs>
            <Breadcrumbs.Link href="#">
              Section
            </Breadcrumbs.Link>
            <Breadcrumbs.Link href="#">
              Sub-section
            </Breadcrumbs.Link>
            Current page
          </Breadcrumbs>


          <GridRow>
            <GridCol setWidth="two-thirds">
              <Heading size="XLARGE">
                Book an appointment with Skills For Care
              </Heading>
            </GridCol>
          </GridRow>
          

          <GridRow>
            <GridCol setWidth="two-thirds">
              <div>
              <LeadParagraph>
                Use this service to book a consultation with one of our Skills for Care counsellor.
              </LeadParagraph>
              <InsetText>
                You will need your payment details if applying for paid service.
              </InsetText>

              <Link to="/bookingform"> 
                <Button
                  icon={<ButtonArrow />}
                  start
                  
                >
                  Start now
                </Button>
              </Link> 

              </div>
            </GridCol>
            <GridCol setWidth="one-third">
            </GridCol>
          </GridRow>



        </div>
    );
};

export default StartPage;