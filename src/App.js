import './App.css';
import Home from './components/App/Home';
import Nav from './components/Nav/Nav';
import Reservations from './components/App/Reservations';
import { Route, Routes } from 'react-router-dom';
import { NavItem, items } from './components/contexts/MyContext';

function App() {


	return (
		<>
			<NavItem.Provider value={items}>
				<Nav/>
			</NavItem.Provider>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="/Home" element={<Home />} />
				</Route>
				<Route path="/Reservations" element={<Reservations />} />
			</Routes>
		</>
	);
}

export default App;
