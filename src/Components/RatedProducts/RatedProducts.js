import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import RatedProductCard from "./RatedCard/RatedProductCard";

const RatedProducts = (props) => {

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
    <RatedProductCard  products={props.products} auth={props.auth} users={props.users} searchRate={searchRate} />
    </div>
  );
};

export default RatedProducts;
