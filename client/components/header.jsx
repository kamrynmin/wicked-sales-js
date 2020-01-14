import React from 'react';

function HeaderTitle(props) {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <a className="navbar-brand fas fa-dollar-sign col-5" style={{ color: 'white' }}>{props.text}</a>
    </nav>);
}

export default HeaderTitle;
