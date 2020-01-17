import React from 'react';
import HeaderTitle from './header';
import ProductList from './ProductList';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      isLoading: true,
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems() {
    fetch('/api/cart')
      .then(response => response.json())
      .then(data => {
        this.setState({ cart: data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  addToCart(product) {
    fetch('/api/cart/', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(result => result.json)
      .then(data => {
        const postData = [...this.state.cart];
        postData.push(data);
        this.setState({ cart: postData });
      });
  }

  setView(name, params) {
    this.setState(state => ({ view: { name, params } }));
  }

  toggleCatalogOrDetails() {
    if (this.state.view.name === 'catalog') {
      return (<ProductList setView={this.setView}></ProductList>);
    } else if (this.state.view.name === 'details') {
      return (<ProductDetails params={this.state.view.params} setView={this.setView} addToCart= {this.addToCart}></ProductDetails>);
    }
  }

  render() {
    return (
      <div>
        <HeaderTitle text=" Wicked Sales" cartCount={this.state.cart.length} />
        <div className= "container-fluid">
          {this.toggleCatalogOrDetails()}
        </div>
      </div>
    );
  }
}
