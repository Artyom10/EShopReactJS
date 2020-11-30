import logo from '../logo.svg';
import React from 'react';
import Slider from '../Components/Slider/Slider';
import BrandIntroduction from '../Components/Brands/BrandsIntroduction';
import ShowProducts from '../Components/Products/ShowPoducts';
import StyleExamples from '../Components/StyleExamples/StyleExamples';
import '../App.css';
import ShowProductsContainer from '../Components/Products/ShowProductsContainer';
import StyleExamplesContainer from '../Components/StyleExamples/StyleExamplesContainer';
import BrandsIntroductionContainer from '../Components/Brands/BrandsIntroductionContainer';



const  MainPage = (props) => {
  return (
    <div>
   
  
   <BrandsIntroductionContainer/>
   <StyleExamplesContainer />
   <ShowProductsContainer />
   
   </div>
  );
}



export default MainPage;
