import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import About from './About';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <h2>React Router</h2>
               <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Login'}>Login</Link></li>
                  <li><Link to={'/About'}>About</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Login' component={Login} />
                  <Route exact path='/About' component={About} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;