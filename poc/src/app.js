import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DefaultPaginationTable from './index';
import ShoppingList from './ShoppingList';

class App extends React.Component {
   render() {
      return (
         <Router>
            <div>
               <h2> React Router</h2>
               <ul>
                  <li><Link to={'/'}>Index</Link></li>
                  <li><Link to={'/ShoppingList'}>ShoppingList</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={index} />
                  <Route exact path='/ShoppingList' component={ShoppingList} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;