//Importations des pages sur la base de l'application, pour que l'application puisse les faire communiquer entre elles
import './css/Navbar.css';
import './css/Home.css';
import './css/Cards.css';
import './css/SearchEvents.css';
import './css/Events.css';
import logo from './logo.png';
import Home from './views/Home';
import SearchEvents from './views/SearchEvents';
import Events from './views/Events';
import Favoris from './views/Favoris';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

//L'application et ses différents composants (pages/components/router)
function App() {

  return (
    
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Router>

        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/SearchEvents' component={SearchEvents} />
          <Route path='/Events' component={Events} />
          <Route path='/Favoris' component={Favoris} />
        </Switch>
        
      </Router>

    </div>
  );
}

export default App;
