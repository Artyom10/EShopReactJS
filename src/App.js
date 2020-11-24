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
import brands from './Components/Brands/BrandsData';
import guidStyle from './Components/StyleExamples/StyleExampleData';


const  App = () => {
  return (
    <div>
   <Nav></Nav>
   <Slider></Slider>
   <BrandIntroduction brands={brands} />
   <StyleExamples guidStyle={guidStyle} />
   <ShowProducts products={products} />
   <Footer />
   </div>
  );
}



export default App;
