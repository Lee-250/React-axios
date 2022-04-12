import { ErrorSummary } from "govuk-react";

const NoChoiceError = () => {
    return (
        <div>
            <ErrorSummary
                description="Please choose an option from the drop down menu"
                errors={[
               
                {
                    targetName: 'description',
                    text: 'No option was selected'
                }
                ]}
                heading="An error has occurred" 
/>      
        </div>
    );
};

export default NoChoiceError;