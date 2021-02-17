import React, {useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import GlobalStyle from './globalStyles'
import Dropdown from './components/Dropdown'
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import apropos from './pages/apropos';
import services from './pages/services';
import carrieres from './pages/carrieres';
import contact from './pages/contact';


function App() {
  let location = useLocation();
  const[isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <GlobalStyle/>
    <Navbar toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch location={location} key={location.pathname}>
          <Route path='/' exact component={Home} />
          <Route path='/apropos' component={apropos} />
          <Route path='/services' component={services} />
          <Route path='/carrieres' component={carrieres} />
          <Route path='/contact' component={contact} />
        </Switch>
      <Footer />
    </>
  );
}

export default App;
