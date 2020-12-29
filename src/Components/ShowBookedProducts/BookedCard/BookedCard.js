import React from "react";
import stylesFor from "../ShowBookedProducts.module.css";

const BookedCard = (props) => {
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
          {user.firstName} {user.secondName} &nbsp;
        </p>
        <ul className="list-group list-group-flush">
        <li className="list-group-item"><button className={`btn add-bag-button ${stylesFor.btnProductBook} btn-block`} type="button"
            >User booked products</button></li>
          {props.products.map((product) =>
            user.bags.map((bookedProduct) =>
              bookedProduct === product.id ? (
                <li className={stylesFor.listItems}>
                  <p>
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

export default BookedCard;
