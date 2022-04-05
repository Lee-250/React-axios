import { Button } from 'govuk-react';
import React, { useState, useEffect } from 'react';

const FunctionalRendering = ({name}) => {
    const [login, setLogin] = useState(false);
    
    if (login) {
        return (<div><Button onClick={() => setLogin(false)}>Show</Button>

        </div>);
    } else {
        // If user is logged out
        return (<div><Button onClick={() => setLogin(true)}>Hide</Button>
        Name state here: {name}</div>);
       
    }
};

export default FunctionalRendering;