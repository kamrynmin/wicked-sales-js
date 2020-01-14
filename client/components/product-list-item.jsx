import React from 'react';

function ProductListItem(props) {
  return (
    <div className="card" style= {{ width: '18rem' }}>
      <img src={props.image} className="card-img-top img-responsive fit-image"></img>
      <div className="card-body">
        <p className="price-text">{'$' + props.price}</p>
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.shortDescription}</p>
        <a className="btn btn-primary">Product Details</a>
      </div>
    </div>
  );
}

export default ProductListItem;
