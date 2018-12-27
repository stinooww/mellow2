import React, {Component} from 'react';

class PortfolioItem extends Component {
    render() {
// eslint-disable-next-line
        const Product = ({match,data}) => {
            var product = data.find(p => p.id === match.params.productId);
            // eslint-disable-next-line
            let productData;
            if (product) {
                this.productData = <div>
                    <h3> {product.name} </h3>
                    <p>{product.description}</p>
                    <hr/>
                    <h4>{product.status}</h4>
                </div>;
            }
            else {
                this.productData = <h2> Sorry. Product doesnt exist </h2>;
            }
        };
            return (
                <div>
                    <div>
                        {this.productData}
                    </div>
                </div>
            )
        }
}

export default PortfolioItem;