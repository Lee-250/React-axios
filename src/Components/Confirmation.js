import {  Heading, Panel, Main } from 'govuk-react';


const Confirmation = () => {
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
            <Heading size="MEDIUM">What happens next?</Heading>
            </Main>
            
        </div>
    );
};

export default Confirmation;