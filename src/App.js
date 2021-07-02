import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import Home from './components/Home';
import Navbar from './components/partial/Navbar';
import Footer from './components/partial/Footer';
import Sobre from './components/About';
import Galeria from './components/Gallery';
import Contato from './components/Contact';


function App() {
  return (
    <div>
      
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path='/'component={Home}/>
            <Route path='/about' component={Sobre}/>
            <Route path='/gallery' component={Galeria}/>
            <Route path='/contact' component={Contato}/>
          </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
