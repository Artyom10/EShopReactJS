import logo from '../logo.svg';
import React from 'react';
import Slider from '../Components/Slider/Slider';
import BrandIntroduction from '../Components/Brands/BrandsIntroduction';
import ShowProducts from '../Components/Products/ShowPoducts';
import StyleExamples from '../Components/StyleExamples/StyleExamples';
import '../App.css';



const  MainPage = (props) => {
  return (
    <div>
   
   <Slider sliders={props.sliders}></Slider>
   <BrandIntroduction brands={props.brands} />
   <StyleExamples stylesExample={props.stylesExample} />
   <ShowProducts products={props.products} />
   
   </div>
  );
}



export default MainPage;
