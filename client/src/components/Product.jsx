import React from 'react';
import ReactDOM from 'react-dom';
import StarRatings from 'react-star-ratings';
import '../styles/App.css';
var Product = (props) => (
      <div className ={"product box"}>
        <div className={'product box name'}>
          <div className={'product name'}>{props.data.name}</div>
          <div className={'product description'}>{props.data.description}</div>
      </div>
      <div className={'product box price '}>${props.data.price}</div>
      <div className={'product box review'}>
      <StarRatings
          rating={4}
          starRatedColor="black"
          numberOfStars={5}
          name='rating'
          starDimension="15px"
          starSpacing="1px"
        /> ({props.data.review})
      </div>
  </div>
);
export default Product;