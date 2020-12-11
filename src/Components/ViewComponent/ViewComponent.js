import logo from '../../logo.svg';
import React from 'react';
import '../../App.css';
import BrandsIntroductionContainer from '../Brands/BrandsIntroductionContainer';
import StyleExamplesContainer from '../StyleExamples/StyleExamplesContainer';
import ShowProducts from '../Products/ShowPoducts';


const  ViewComponent = (props) => {
    return (
      <div> 
     <BrandsIntroductionContainer/>
     <StyleExamplesContainer />
     <ShowProducts />
     </div>
    );
  }
  
  
  
  export default ViewComponent;