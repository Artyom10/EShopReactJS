import React from 'react';


function SliderItem(props) {
    const {info} = props;
    const { urlPhoto, text, id} = info;
    console.log(props,info);
    let classActive = null;
    if(id === 1){
       classActive = 'carousel-item active'
    }
    else{
      classActive = 'carousel-item'
    }
    return (
      <div className={classActive}>
        <img src={urlPhoto} className="d-block w-100" alt="photo" />
        <div className="carousel-caption d-none d-md-block">
       <p className="carusel-description">{text}</p>
        </div>
      </div>
    );
  }
  
  export default SliderItem;