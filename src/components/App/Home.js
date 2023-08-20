import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import  {NavItem, items}  from '../contexts/MyContext';
function Home() {
	return (
		<>
			<Header />
			<Main />
			<NavItem.Provider value={items}>
				<Footer />
			</NavItem.Provider>
		</>
	);
}

export default Home;
