import { ErrorSummary } from "govuk-react";

const Error = () => {
    return (
        <div>
            <ErrorSummary
                description="Please make sure all fields were correctly entered and try again"
                errors={[
               
                {
                    targetName: 'description',
                    text: 'Description of what you saw error'
                }
                ]}
                heading="There has been a problem" 
/>
Copy

        </div>
    );
};

export default Error;