import React from 'react';
import SliderItem from './SliderItem/SliderItem';
import './Slider.css';



function Slider(props) {
    return (
      <div className="container">
        <div className="carousel-inner">
         <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
         <ol class="carousel-indicators">
          <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselIndicators" data-slide-to="1"></li>
          <li data-target="#carouselIndicators" data-slide-to="2"></li>
        </ol>
          <div className="carousel-inner">
          
            {/*props.sliders.map(slider => {
              return <SliderItem info={slider}/>
            })*/}
            
          
          </div>
          <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
         </div>
        </div>
        <hr />
        </div>
    );
  }
  
  export default Slider;