import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import BookedCard from "./BookedCard/BookedCard";
import stylesFor from './ShowBookedProducts.module.css'

const ShowBookedProducts = (props) => {

    let [searchRate, setSearchRate] = useState('');

  const handleSearch = (e) => {
      e.preventDefault();
       setSearchRate(e.target.value)
  }

  const { auth } = props;
  if (!auth.uid) return <Redirect to="/log_in" />;

  
  return(
    <div className='container'>
    <input className="form-control" id="searchRate" placeholder="Enter user first name or user last name"
    onChange={handleSearch} value={searchRate} />
    <BookedCard  products={props.products} auth={props.auth} users={props.users} searchRate={searchRate} />
    </div>
  );
};

export default ShowBookedProducts;
