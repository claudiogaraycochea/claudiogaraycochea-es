import React, { Suspense } from 'react';
import '../ui/Fonts.css';
import '../ui/Normalize.css';
import '../ui/UI.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import Header from '../components/header/Header';
import Home from '../pages/home/Home';
import Footer from '../components/footer/Footer';*/
import Router from '../routes/Router';

function App() {
	return (
		<Suspense fallback="loading">
			<div className='app'>
				<Router/>
			</div>
		</Suspense>
	);
}
/*
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}*/

export default App;
