import logo from '../logo.svg';
import React from 'react';
import Clients from '../Components/Clients/Clients';
import '../StylesForPages/AdminClients.css';

import clients from '../Components/Clients/ClientsData';

function App() {
  return (
    <div>
        
        <Clients  clients={clients}/>
       
    </div>
  );
}

export default App;
