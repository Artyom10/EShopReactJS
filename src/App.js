import logo from './logo.svg';
import React from 'react';
import Nav from './Components/MainPage/Navbar/Nav';
import Slider from './Components/MainPage/Slider/Slider';
import BrandIntroduction from './Components/MainPage/Brands/BrandsIntroduction';
import ShowProducts from './Components/MainPage/Products/ShowPoducts';
import StyleExamples from './Components/MainPage/StyleExamples/StyleExamples';
import Footer from './Components/MainPage/Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
   <Nav></Nav>
   <Slider></Slider>
   <hr />
   <h1 class="brand-introduction">Most popular brands</h1>
   <BrandIntroduction></BrandIntroduction>
   <h3 class="choose-style-introduction">Choose your style</h3>
   <StyleExamples></StyleExamples>
   <ShowProducts></ShowProducts>
   <Footer />
   </div>
  );
}

export default App;
