import React from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import './styles/App.css';

import Tables from './components/Tables';
import Navbar from './Navbar';
import Footer from './Footer';


const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})


const localhostURL = 'http://localhost:5000';
const herokuURL = 'https://gureev-greenhouse-app.herokuapp.com';
const currentEnv = window.location.href.includes('localhost') ? localhostURL : herokuURL;
const rootUrl = process.env.NODE_ENV === 'production' ? currentEnv : '';

async function fetchData() {
	const response = await fetch(rootUrl + '/data', {
		mode: 'cors',
		headers: {
			Accept: 'application/json',
		},
	});
	return response.json()
}


class ReactQueryWrapper extends React.Component {
	render() {
		return (
			<QueryClientProvider client={queryClient}>
				<App />
				<ReactQueryDevtools />
			</QueryClientProvider>
		)
	}
}


function App() {
	const { data, status } = useQuery('data', fetchData);

	if (status === 'loading') {
		return <p>Loading...</p>;
	}

	if (status === 'error') {
		return <p>Error!</p>;
	}

	return (
		<div className="App">
			<Navbar />
			<Tables
				items={data.items}
			/>
			<Footer />
		</div>
	)
}


export default ReactQueryWrapper;
