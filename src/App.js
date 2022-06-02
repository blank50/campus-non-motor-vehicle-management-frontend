import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import './index.css';
import Contactus from "./components/layout/Topics/Contactus";
import Products from './components/layout/Topics/Products'
import LearnRating from "./components/vehicle/LearnRating";
import LearnColour from "./components/vehicle/LearnColour";
//import { Academics } from "./components/layout/Topics/Academics";
import CollegesMajors from "./components/layout/Subtopics/CollegesMajors"
import Undergraduate from './components/layout/Subtopics/Undergraduate'
import PostGraduate from './components/layout/Subtopics/PostGraduate'
import NonDegree from './components/layout/Subtopics/NonDegree'
import SummerCamp from './components/layout/Subtopics/SummerCamp'
import Statistics from "./components/vehicle/Statistics";
import Law from "./components/layout/Topics/Law"
// import ColorPicker from "./components/vehicle/ColorPicker";
// import Rating from 

// import Select from 'react-select'
// import image from './components/pages/wenzhou.jpg'
{/* style={{ backgroundImage:`url(${image})`}} */}
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            
          
            <Alerts />
            <Switch>
              <Route exact path="/" component={About} />
              <PrivateRoute exact path="/vehicles" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              {/* <Route exact path="/academics" component={Academics} /> */}
              <Route exact path="/contactus" component={Contactus} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/collegesnmajors" component={CollegesMajors} />
              <Route exact path="/undergraduate" component={Undergraduate} />
              <Route exact path="/postgraduate" component={PostGraduate} />
              <Route exact path="/nondegree" component={NonDegree} />
              <Route exact path="/summercamp" component={SummerCamp} />
              <Route exact path="/LearnRating" component={LearnRating} />
              <Route exact path="/LearnColour" component={LearnColour} />
              <Route exact path="/Statistics" name="Statistics" component={props => <Statistics {...props}/>} />
              <Route exact path="/law" component={Law} />
              
              
            </Switch>
           

          </div>
          </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
