import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';

import apolloClient from './services/apollo';
import ProductList from './product/ProductList';

class App extends Component {
  render() {
    return (
      <ApolloProvider
	client={apolloClient}>
        <div>
  	  <h1>Hello Graphql</h1>
	  <ProductList/>
        </div>
     </ApolloProvider>	
    );
  }
}

export default App;
