import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    this.getDetails();
  }

  getDetails() {
    const productId = this.props.params.productId;
    fetch(`/api/products/${productId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ product: data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    if (this.state.product === null) {
      return null;
    } else {
      const price = `$${(this.state.product.price / 100).toFixed(2)}`;
      return (
        <div className="product-detail-container">

          <div className="card">
            <div className="card-header" onClick={() => { this.props.setView('catalog', {}); }}>
              {'< Back to Catalog'}
            </div>
            <div className="card-body">
              <div className="row">

                <div className="product-image col">
                  <img src={this.state.product.image} />
                </div>

                <div className="short-description col">
                  <h4 className="card-title">{this.state.product.name}</h4>
                  <h5 className="price">{price}</h5>
                  <p className="description">{this.state.product.shortDescription}</p>
                </div>

              </div>

              <div className="long-description">
                <p className="card-text">{this.state.product.longDescription}</p>
              </div>
            </div>
          </div>
        </div>

      );
    }
  }
}
