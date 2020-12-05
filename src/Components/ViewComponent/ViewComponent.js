import logo from '../../logo.svg';
import React from 'react';
import '../../App.css';
import BrandsIntroductionContainer from '../Brands/BrandsIntroductionContainer';
import StyleExamplesContainer from '../StyleExamples/StyleExamplesContainer';
import ShowProductsContainer from '../Products/ShowProductsContainer';


const  ViewComponent = (props) => {
    return (
      <div> 
     <BrandsIntroductionContainer/>
     <StyleExamplesContainer />
     <ShowProductsContainer />
     </div>
    );
  }
  
  
  
  export default ViewComponent;