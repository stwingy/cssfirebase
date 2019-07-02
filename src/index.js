import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

//import App from './components/App';
//import Home from './components/Home'
import MainNav from './navigation/MainNav';
import Spinner from './Spinner';
import * as serviceWorker from './serviceWorker';

const App1 = React.lazy(() => {
	return import('./components/App');
});
const Home1 = React.lazy(() => {
	return import('./components/home/Home');
});
const Card = React.lazy(() => {
	return import('./components/card/Card');
});

const routes = (
	<Switch>
		<Route path="/Card" render={(props) => <Card {...props} />} />
		<Route path="/App" render={(props) => <App1 {...props} />} />
		<Route path="/" exact render={(props) => <Home1 {...props} />} />
	</Switch>
);

ReactDOM.render(
	<BrowserRouter>
		<MainNav />
		<Suspense fallback={<Spinner />}>{routes}</Suspense>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
