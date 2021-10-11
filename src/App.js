import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import MealDetails from "./components/MealDetails/MealDetails";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Order from "./components/Order/Order";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/about">
            <About></About>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/order">
            <Order></Order>
          </PrivateRoute>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
