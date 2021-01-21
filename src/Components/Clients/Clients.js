import React, { useState } from 'react';
import PersonContainer from './Person/PersonContainer';
import stylesFor from './Clients.module.css';
import { Redirect } from 'react-router-dom';


const Clients = (props) => {
 

  const [searchUsers, setSearchUsers] = useState('');
  const handleSearch = (e) => {
     e.preventDefault();
     setSearchUsers(e.target.value)
}
if(!props.auth.uid ) return <Redirect to='/log_in'/>
    return (
     <div className="container">
        <input className="form-control" id="searchUsers" placeholder="search users"
                 onChange={handleSearch} value={searchUsers} />
                 <div className='table-responsive'>
         <table className={`table ${stylesFor.clientTable} table-hover`}>
         <thead>
          <tr className={stylesFor.trStyle}>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Remove request</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
         </thead>
         <tbody>
             <PersonContainer searchUsers={searchUsers} />
         </tbody>
    </table>
    </div>
     </div>
    );
}

export default Clients;