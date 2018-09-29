import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    if (products.loading) {
      return (
        <div>
	  Carregando...
	</div>
      );	  
    }

    return (
      <div>
	{products.allProducts.map((product) => {
  	  return (
  	    <div>
  	      <img src={product.image} alt={`image of ${product.description}`}/>
	      <h2>{product.title}</h2>
	      <p>{product.description}</p>
	      <h3>{product.value}</h3>
	      <button
	        onClick={() => alert(product.id)}
	      >Comprar</button>
            </div>
           )}
	)}
      </div>
    );
  }
}

const ProductsQuery = gql`
  query {
    allProducts {
      id
      title
      description
      value
      image
    }
  }
`;

export default graphql(ProductsQuery, { name: 'products' })(ProductList);

