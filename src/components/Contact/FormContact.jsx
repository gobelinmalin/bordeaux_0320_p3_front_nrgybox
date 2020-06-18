import React from 'react';
import Axios from 'axios';
import React, { useState } from 'react';

function FormContact () {
    const [contact, setContact] = useState(0);
    const url = 'https://localhost:3000/api/send';

    Axios.post(url, data)
    return(
        <div>


        </div>
    )
}

Export default Contact