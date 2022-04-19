import React from 'react';


import { Heading, GridCol, GridRow, LeadParagraph, InsetText, Button, ButtonArrow, OrderedList, ListItem, Paragraph } from 'govuk-react';
import {Link} from "react-router-dom";

const StartPage = () => {
    return (
        <div className='start-page'>
          


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
                Use this service to book a consultation with a Skills for Care counsellor.
                To apply you must:
              </LeadParagraph>

              <OrderedList listStyleType="bullet">
                <ListItem>
                  be an employer of Health Care workers
                </ListItem>
                <ListItem>
                  be able to access the required funding for paid services
                </ListItem>
              </OrderedList>

              <InsetText>
                You will need your payment details if applying for paid service.
              </InsetText>
              <Heading size="LARGE">
               How long it takes
              </Heading>
              <Paragraph>
                It will take approximately 5 minutes to book your appointment with this service. Once complete, you will receive email confirmation with further details for your appointment
              </Paragraph>
              <Heading size="LARGE">
               Before you start
              </Heading>
              <Paragraph>
                     Visit the [Skills for Care website](https://www.skillsforcare.org.uk/home.aspx) for more information about the services offered.
              </Paragraph>
              

              <Link className="button" to="/bookingform"> 
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