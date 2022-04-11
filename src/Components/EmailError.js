import { ErrorSummary } from "govuk-react";

const EmailError = () => {
    return (
        <div>
            <ErrorSummary
                description="Please make sure all fields were correctly entered and try again"
                errors={[
               
                {
                    targetName: 'description',
                    text: 'Invalid email, please check your input'
                }
                ]}
                heading="An error has occurred" 
/>      
        </div>
    );
};

export default EmailError;