import React from 'react';
import ReactDOM from 'react-dom';



/*-------------Components Import--------------*/

import App from "./MainApp/App/App"



// Render To Index HTML

ReactDOM.render(

    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('trade-mart')
);