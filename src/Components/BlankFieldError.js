import { ErrorSummary } from "govuk-react";

const BlankFieldError = () => {
    return (
        <div>
            <ErrorSummary
                description="Please make sure all fields were correctly entered and try again"
                errors={[
               
                {
                    targetName: 'description',
                    text: 'This field can\'t be blank, please fill it in'
                }
                ]}
                heading="An error has occurred" 
/>      
        </div>
    );
};

export default BlankFieldError;