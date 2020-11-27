import logo from '../logo.svg';
import React from 'react';
import Clients from '../Components/Clients/Clients';
import '../StylesForPages/AdminClients.css';


function App(props) {
  return (
    <div>
        
        <Clients  clients={props.clients} addPerson={props.addPerson}/>
       
    </div>
  );
}

export default App;
