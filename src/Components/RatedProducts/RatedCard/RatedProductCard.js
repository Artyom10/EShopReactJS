import React from "react";
import stylesFor from "../RatedProducts.module.css";

const RatedProductCard = (props) => {
  console.log(props.searchRate);
  return(
   props.searchRate !== ''
   ?
   props.users.map((user) => (
    ~user.firstName.indexOf(props.searchRate) || ~user.secondName.indexOf(props.searchRate)
    ?
    <div className="container">
      <div
        className={`col d-md-flex ${stylesFor.colProduct} `}
        key={user.id}
      >
        <img src={user.userPhoto} className={`${stylesFor.userPhoto}`} />
        <p className="card-text">
          {user.firstName} {user.secondName}
        </p>
        <ul className="list-group list-group-flush">
          {props.products.map((product) =>
            user.valuedProducts.map((valuedProduct) =>
              valuedProduct.targetProductRating === product.id ? (
                <li className={stylesFor.listItems}>
                  <p>
                    Rate
                    <button className={`btn btn-info`}>
                      {valuedProduct.value}
                    </button>
                    <img className={stylesFor.imgIn} src={product.photo}  alt={product.id}/>
                  </p>
                </li>
              ) : null
            )
          )}
          <li className="list-group-item"></li>
        </ul>
      </div>
    </div>
    : null
  ))
  :
  <div className='container'>
    <div className='row justify-content-center'>
<ul className='list-group list-group-flush'>
   {props.users.map(user =>{
  return  <li key={user.id}  className={`list-group item ${stylesFor.userInfo}`}>{user.firstName} {user.secondName}</li>
})}
</ul>
</div>
</div>

);
};

export default RatedProductCard;
