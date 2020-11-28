import React from 'react';
import PropTypes from 'prop-types';
import ProductRating from '../ProductCard/ProductRating/ProductRating';
import { addToBagActionCreator } from '../../../redux/bagPage-reducer';

const modalStyleProduct = {
    modalStyle: {
        display: 'none'
    }
  }



function MoreAboutProduct(props) {
    const {product} = props;
    const {urlPhoto, price, producer, type, sizes, description, tags} = product;

    const addToBag = () => {
      const data = {
        id: 3,
        "urlPhoto": urlPhoto,
        "price": price,
        "producer": producer,
        "type": type,
        "sizes": sizes,
        "description": description,
        "tags": tags
      }
      let action = addToBagActionCreator(data);
      props.dispatch(action);
    }

  return ( 
    <div className="container">
        <div className="card mb-3 ">
          <div className="row no-gutters justify-content-center">
            <div className="col-md-4">
              <div className="container-for-img">
                <img src={urlPhoto} className="card-img" alt={type} />
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Main information</h5>
                <ul className="list-group">
                  <li className="list-group-item">Price: {price}$</li>
                  <li className="list-group-item">
                    Producer/type:{producer} : {type}
                  </li>
                  <li className="list-group-item">Sizes:{sizes}</li>
                  <li className="list-group-item">Description:{description}</li>
                  <li className="list-group-item">Tags:{tags}</li>
                  <li className="list-group-item">
                    <div className="dropdown">
                      <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Choose size
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">XS</a>
                        <a className="dropdown-item" href="#">S</a>
                        <a className="dropdown-item" href="#">M</a>
                        <a className="dropdown-item" href="#">L</a>
                        <a className="dropdown-item" href="#">XL</a>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <button className="btn add-bag-button" onClick={addToBag}>Add to bag</button>
                  </li>
                  <li className="list-group-item">
                    <ProductRating />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

MoreAboutProduct.propTypes = {
    product: PropTypes.object.isRequired,
    urlPhoto: PropTypes.string,
    price: PropTypes.string,
    producer: PropTypes.string,
    type: PropTypes.string,
    sizes: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.string
}

export default MoreAboutProduct;
