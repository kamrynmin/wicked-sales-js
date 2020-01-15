import React from 'react';

function ProductListItem(props) {
  const price = `$${(props.price / 100).toFixed(2)}`;
  return (
    <div className="card" style= {{ width: '23rem' }} onClick={() => { props.setView('details', { productId: props.productId }); }}>
      <img src={props.image} className="card-img-top img-responsive fit-image"></img>
      <div className="card-body">
        <p className="price-text">{price}</p>
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.shortDescription}</p>
      </div>
    </div>
  );
}

export default ProductListItem;
