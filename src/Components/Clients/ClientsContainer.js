import React from 'react';
import PropTypes, { object } from 'prop-types';
import {addPerson, setUsers} from '../../redux/reducers/clientsPageReducer';
import { connect } from 'react-redux';
import Clients from './Clients';

class ClientsContainer extends React.Component {
   componentDidMount(){

   }

   render(){
       return(
        <Clients addPerson={this.props.addPerson} auth={this.props.auth} />
       );
   }
}


const mapStateToProp = (state) => {
   return {
    clients: state.clientsPage.clients,
    auth: state.firebase.auth,
   }
}

//const ClientsContainer = connect(mapStateToProp,{addPerson,})(Clients);

export default connect(mapStateToProp,{addPerson, setUsers,})(ClientsContainer);
//export default ClientsContainer;