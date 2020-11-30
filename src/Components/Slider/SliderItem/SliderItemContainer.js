import React from 'react';
import { connect } from 'react-redux';
import SliderItem from './SliderItem';



const mapStateToProp = (state) => {
    return {
     sliders: state.mainPage.sliders,
    }
 }
 
 const mapDispatchToProp = (dispatch) => {
   return {
       
   }
 }
 
 const SliderItemContainer = connect(mapStateToProp,mapDispatchToProp)(SliderItem);
  
  export default SliderItemContainer;