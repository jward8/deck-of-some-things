import './App.css';
import Home from './components/Home';
import Deck from './components/Deck';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/pull' component={Deck}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
