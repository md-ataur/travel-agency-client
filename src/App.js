import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Places from './components/Home/Places/Places';
import Booking from './components/Booking/Booking';
import AddTourism from './components/AddTourism/AddTourism';
import ManageBooking from './components/ManageBooking/ManageBooking';
import MyBooking from './components/MyBooking/MyBooking';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/addtourism">
              <AddTourism></AddTourism>
            </PrivateRoute>
            <PrivateRoute path="/booking/:id, :bookName">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/mybooking">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path="/managebooking">
              <ManageBooking></ManageBooking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
