import React, { Component } from 'react'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BookList from './components/book/BookList';
import Header from './components/global/Header';

const client = new ApolloClient({
	uri: 'http://127.0.0.1:8000/graphql'
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<div className="jumbotron">
					<div className="row">
						<div className="col-sm-12">
							<Header />
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<div className="App">
								<h1>Ninja Reading Book list</h1>
								<BookList />
							</div>
						</div>
					</div>
				</div>
			</ApolloProvider>
		);
	}
}

export default App;
