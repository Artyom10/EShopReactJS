import React from 'react';
import PropTypes from 'prop-types';
import { removeTarget, setBags} from '../../../redux/reducers/bagPageReducer';
import BagCard from './BagCard';
import { connect } from 'react-redux';
//НА ДАННЫЙ МОМЕНТ НЕ ИСПОЛЬЗУЕТСЯ 
/*class BagCardContainer extends React.Component {
  /*  componentDidMount(){
        firebaseDB.database().ref().child('bags').on('value', snapshot => {
            if (snapshot.val() != null)
                this.props.setBags(Object.values(snapshot.val()))
        })
    }

    render(){
        return(
         <BagCard bags={this.props.bags}
         removeFromBag={this.props.removeFromBag}/>
        );
    }
}*/


const mapStateToProp = (state) => {
    return {
     bags: state.bagPage.bags,
    }
 }

const BagCardContainer = connect(mapStateToProp,{ removeFromBag: removeTarget, setBags})(BagCard);
export default BagCardContainer;

