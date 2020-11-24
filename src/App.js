import logo from './logo.svg';
import React from 'react';
import Nav from './Components/Navbar/Nav';
import Slider from './Components/Slider/Slider';
import BrandIntroduction from './Components/Brands/BrandsIntroduction';
import ShowProducts from './Components/Products/ShowPoducts';
import StyleExamples from './Components/StyleExamples/StyleExamples';
import Footer from './Components/Footer/Footer';
import './App.css';

import products from './Components/Products/ProductsData';

const  App = () => {
  return (
    <div>
   <Nav></Nav>
   <Slider></Slider>
   <hr />
   <h1 className="brand-introduction">Most popular brands</h1>
   <BrandIntroduction></BrandIntroduction>
   <h3 className="choose-style-introduction">Choose your style</h3>
   <StyleExamples></StyleExamples>
   <ShowProducts products={products}></ShowProducts>
   <Footer />
   </div>
  );
}

export default App;
