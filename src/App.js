import './App.css';
import Myresume from './myresume';
import {BrowserRouter as Router,Route,  Link, Switch,  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
  
      <Switch>
        <Route path="/" component={Myresume}/>
      </Switch>
      </Router>
    
    </div>
  );
}

export default App;
