import React from 'react';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Notfound from './components/Notfound/Notfound';
import UserDetail from './components/UserDetail/UserDetail';
const App = () => {
  return (
    <div>
    <Router>
      <Switch> 
         <Route path='/Home'>
         <Home/>
         </Route>

         <Route exact path='/'>
         <Home/>
         </Route>

         <Route path='/about/:data'>
         <UserDetail/>
         </Route>

         <Route path='*'>
          <Notfound/>
         </Route>

      </Switch>
    
    </Router>
    </div>
  );
};

export default App;