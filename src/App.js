// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import IndexComponent from './components/IndexComponent';
import NavComponent from './components/NavComponent';
// import FooterComponent from "./components/FooterComponent";

import { Provider } from 'react-redux';
import { store } from './store';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
    <Provider store={store}>
    <NavComponent />
    {/* <IndexComponent /> */}
    {/* <FooterComponent /> */}
    </Provider>
    </BrowserRouter>
    </>
    
    
  );
}

export default App;
