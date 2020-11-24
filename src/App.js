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
   <hr />
   <h1 className="brand-introduction">Most popular brands</h1>
   <BrandIntroduction brands={brands} />
   <h3 className="choose-style-introduction">Choose your style</h3>
   <StyleExamples guidStyle={guidStyle} />
   <ShowProducts products={products} />
   <Footer />
   </div>
  );
}



export default App;
