import React from 'react';
import SliderItem from './SliderItem/SliderItem';
import './Slider.css';
import { connect } from 'react-redux';
import Slider from './Slider';


const mapStateToProp = (state) => {
    return {
     sliders: state.mainPage.sliders,
    }
 }
 
 const mapDispatchToProp = (dispatch) => {
   return {
       
   }
 }
 
 const SliderContainer = connect(mapStateToProp,mapDispatchToProp)(Slider);
  
  export default SliderContainer;