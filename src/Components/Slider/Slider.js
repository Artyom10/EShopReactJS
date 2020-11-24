import React from 'react';

function Slider() {
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
          <div class="carousel-item active">
            <img src="https://sun9-30.userapi.com/impg/2-KK4RLEzdUJIf2ngjIbXW5jWn-AnUavK0ZDvQ/0NQ4fNZsRnM.jpg?size=1128x634&quality=96&proxy=1&sign=bc862b17a08a11896dbbab6d6b1061b5" class="d-block w-100" alt="photo" />
            <div class="carousel-caption d-none d-md-block">
              <p class="carusel-description">In our store you will find only the best clothes, most likely we will not be able to find something similar on the Internet.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://sun9-67.userapi.com/impg/WIT9k2o-JkFX8bHBYN58xLdL0VLf5qPdy4NtMA/oWMcdsxN3yk.jpg?size=1128x634&quality=96&proxy=1&sign=a7cfa799213dc1fc04334f8adeb4f45e" class="d-block w-100" alt="photo" />
            <div class="carousel-caption d-none d-md-block">
              <p class="carusel-description">Thank you for choosing on our website, you can not only buy one thing, you can also choose several things at once creating your own style</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://sun9-55.userapi.com/impg/OtcJv2MLv3spezj6IAS5nDl8ItkxkeCA6-EvCw/ABCT-qapl3c.jpg?size=1128x634&quality=96&proxy=1&sign=2b4b5724065412a1aee9c6850891a70b" class="d-block w-100" alt="photo" />
            <div class="carousel-caption d-none d-md-block">
              <p class="carusel-description">Always be in fashion with our selection. Here you can buy only the most fashionable and trendy clothes</p>
            </div>
          </div>
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
        </div>
    );
  }
  
  export default Slider;