import React, { Component } from 'react'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BookList from './components/book/BookList';
import AddBook from './components/book/AddBook';

const client = new ApolloClient({
	uri: 'http://127.0.0.1:8000/graphql'
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<div className="App">
					<h1>Ninja Reading Book list</h1>
					<BookList />
					<AddBook />
				</div>
			</ApolloProvider>
		);
	}
}

export default App;
