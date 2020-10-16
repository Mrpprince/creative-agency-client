import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import bootstrap from './dist/css/bootstrap.min.css'
import './App.css';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Order from './Components/Order/Order';
import ShoppingList from './Components/ShoppingList/ShoppingList';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Review from './Components/Review/Review';
import ServiceList from './Components/Admin/ServiceList/ServiceList';
import AddService from './Components/Admin/AddService/AddService';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';

export const UserContext = createContext();
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState({});
  return (
    <UserContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/Order'>
           <Order></Order>
          </PrivateRoute>
          <Route path='/serviceList'>
            <ShoppingList></ShoppingList>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route path='/adminServiceList'>
            <ServiceList></ServiceList>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
        </Switch>

      </Router>
      </UserContext.Provider>
  );
}

export default App;
