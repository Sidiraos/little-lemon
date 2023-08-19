import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { NavItem } from './components/contexts/MyContext';

function App() {
	const items = [
		'Home',
		'Login',
		'About',
		'Menu',
		'Reservations',
		'Order online',
	];
	return (
		<>
			<NavItem.Provider value={items}>
				<Nav />
			</NavItem.Provider>
			<Header />
			<Main />
			<NavItem.Provider value={items}>
				<Footer />
			</NavItem.Provider>
		</>
	);
}

export default App;
