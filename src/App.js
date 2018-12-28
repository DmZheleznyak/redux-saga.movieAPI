import React, { Component } from 'react';
import './App.css';

import Header from './header/Header'
import CartOfMovie from './cartOfMovie/CartOfMovie'
import InfoTheMovie from './infoTheMovie/InfoTheMovie'
// https://github.com/rajdee/redux-in-russian/blob/master/docs/advanced/UsageWithReactRouter.md
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
	state = {
		popMoviesList: []
	}

	componentDidMount() {
	  this.props.getPopularMovie()
	}

	render() {
		const ListPopMovies = () => (
			<CartOfMovie 
				popMovies={this.props.popularMovieList}
				genreMovie={this.props.genreMovie} />
		)

    return (
			<BrowserRouter>
				<div className="App">
					<Route path='/' component={Header} />
					<Route exact path='/' component={ListPopMovies} />
					<Route path="/movie" component={InfoTheMovie} />							
				</div>
			</BrowserRouter>
    );
  }
}

export default App;
// https://medium.freecodecamp.org/meet-your-material-ui-your-new-favorite-user-interface-library-6349a1c88a8c