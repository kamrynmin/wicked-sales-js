import React from 'react';
import HeaderTitle from './header';
import ProductList from './ProductList';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState(state => ({ view: { name, params } }));
  }

  toggleCatalogOrDetails() {
    if (this.state.view.name === 'catalog') {
      return (<ProductList setView={this.setView}></ProductList>);
    } else if (this.state.view.name === 'details') {
      return (<ProductDetails params={this.state.view.params} setView={this.setView}></ProductDetails>);
    }
  }

  render() {
    return (
      <div>
        <HeaderTitle text="Wicked Sales" />
        <div className= "container-fluid">
          {this.toggleCatalogOrDetails()}
        </div>
      </div>

    );
  }
}
