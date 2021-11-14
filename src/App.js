import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Resister from './components/Resister/Resister';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AllProducts from './pages/AllProducts/AllProducts';
import Purchase from './pages/Purchase/Purchase';
import MyOrders from './dashboard/MyOrders/MyOrders';

function App() {
  return (
    <AuthProvider>
      <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/products'>
          <Products></Products>
        </Route>
        <Route path='/all-products'>
          <AllProducts></AllProducts>
        </Route>
        <Route path='/purchase/:id'>
          <Purchase></Purchase>
        </Route>
        <Route path='/dashboard'>
          <Dashboard></Dashboard>
        </Route>
        <Route path='/orders'>
          <MyOrders></MyOrders>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/resister'>
          <Resister></Resister>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
