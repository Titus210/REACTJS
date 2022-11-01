import React from 'react';
import ReactDOM from 'react-dom';

/*-------------Components Import--------------*/
// Login COmponent
import Login from '../src/MainApp/Login/Login'



// Render To Index HTML

ReactDOM.render(
    <React.StrictMode>
        <Login/>
    </React.StrictMode>,
    document.getElementById('trade-mart')
);