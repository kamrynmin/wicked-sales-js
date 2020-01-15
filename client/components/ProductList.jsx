import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => {
        this.setState({ products: data });
      })
      .catch(err => {
        this.setState(
          console.error(err)
        );
      });
  }

  render() {
    const arrayOfProducts = this.state.products;
    return (
      <div className="row mt-5">{
        arrayOfProducts.map(product => {
          return (
            <div key={product.productId} className="card col-4">
              <ProductListItem
                productId={product.productId}
                setView={this.props.setView}
                name={product.name}
                price={product.price}
                image={product.image}
                shortDescription={product.shortDescription}
              />
            </div>
          );
        })
      }
      </div>
    );

  }
}
