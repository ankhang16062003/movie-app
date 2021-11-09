import 'swiper/swiper.min.css';
import './App.scss'

import {BrowserRouter, Route} from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Routes from './config/Routes';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Route 
          render = {props => (
              <>
              <Header />
              <Routes />
              <Footer />
            </>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
