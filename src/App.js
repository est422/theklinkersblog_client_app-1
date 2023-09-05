import './App.css';
import { BrowserRouter } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import IndexComponent from './components/IndexComponent';
import NavComponent from './components/NavComponent';
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavComponent />
    {/* <IndexComponent /> */}
    <FooterComponent />
    </BrowserRouter>
    </>
    
    
  );
}

export default App;
