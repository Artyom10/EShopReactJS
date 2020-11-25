import logo from '../logo.svg';
import React from 'react';
import Slider from '../Components/Slider/Slider';
import BrandIntroduction from '../Components/Brands/BrandsIntroduction';
import ShowProducts from '../Components/Products/ShowPoducts';
import StyleExamples from '../Components/StyleExamples/StyleExamples';
import '../App.css';

import products from '../Components/Products/ProductsData';
import brands from '../Components/Brands/BrandsData';
import guidStyle from '../Components/StyleExamples/StyleExamplesData';
import SliderData from '../Components/Slider/SliderData';


const  MainPage = () => {
  return (
    <div>
   
   <Slider sliderData={SliderData}></Slider>
   <BrandIntroduction brands={brands} />
   <StyleExamples guidStyle={guidStyle} />
   <ShowProducts products={products} />
   
   </div>
  );
}



export default MainPage;
