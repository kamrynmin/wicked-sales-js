import React from 'react';

function HeaderTitle(props) {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <a className="navbar-brand fas fa-dollar-sign col-5" style={{ color: 'white' }}>{props.text}</a>
      <div
        onClick={props.viewCart}
        className="text-right"
        style={{ cursor: 'pointer' }}>
        <a className="col-1 fas fa-shopping-cart" style={{ color: 'white', width: '2rem' }}>  {props.cartCount} Items</a>
      </div>
    </nav>);

}

export default HeaderTitle;
