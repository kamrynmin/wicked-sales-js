import React from 'react';
import HeaderTitle from './header';
import ProductList from './ProductList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className= "container">
        <div className ="col-4">
          <HeaderTitle text = "Wicked Sales" />
        </div>
        <ProductList />
      </div>

    );
  }
}
