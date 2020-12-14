import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import stylesFor from './Person.module.css';

function Person(props) {
  
  return (
    props.users.map(user =>
   <tr key={user.id}>
     <td>{user.firstName}</td>
     <td>{user.secondName}</td>
     <td>{user.request +''}</td>
      {/*user.valuedProducts.map((productRating) => {
        <td>{productRating.targetProductRating} - {productRating.value}</td>
      })*/}
    <td><button className={`btn ${stylesFor.deleteClientButton}`} onClick={() => (props.removeUser(user.id))}>Delete</button></td>
  </tr>
  ));
}
/*
Person.propTypes = {
  client: PropTypes.object.isRequired,
  firstName: PropTypes.string,
  secondName: PropTypes.string,
  username: PropTypes.string,
  mail: PropTypes.string,
  request: PropTypes.string,
}
*/
export default Person;
