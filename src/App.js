import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Resister from "./components/Resister/Resister";
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AllProducts from "./pages/AllProducts/AllProducts";
import Purchase from "./pages/Purchase/Purchase";
import MyOrders from "./dashboard/MyOrders/MyOrders";
import AddProduct from "./dashboard/AddProduct/AddProduct";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <PrivateRoute path="/all-products">
            <AllProducts></AllProducts>
          </PrivateRoute>
          <PrivateRoute path="/purchase/:id">
            <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/orders">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/add-product">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/resister">
            <Resister></Resister>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
