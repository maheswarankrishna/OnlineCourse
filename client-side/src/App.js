// import logo from './logo.svg';
// import './App.css';

import { Route, BrowserRouter, Switch } from "react-router-dom";
import ApprovalScreen from "./sreens/admin/ApprovalScreen";
import Home from "./sreens/Home";

import LoginScreen from "./sreens/LoginScreen";
import RegisterScreen from "./sreens/RegisterScreen";
import Course from "./sreens/student/CourseScreen";

import Courses from "./sreens/student/CoursesScreen";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/login" component={LoginScreen} />
      <Switch>
        <Route
          exact
          path="/register"
          render={(props) => <RegisterScreen {...props} />}
        />
        <Route exact path="/home"   render={(props) => <Home {...props} />} />
        {/* <Route exact path="/quizes"   render={(props) => <Home {...props} />} /> */}
        {/* <Route exact path="/results"   render={(props) => <Home {...props} />} /> */}
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/course" render={(props) => <Course {...props} />} />
        {/* <Route exact path="/mycourses" component={Courses} /> */}
        
        {/* Admin Paths */}
        <Route exact path="/admin/approval" render={(props) => <ApprovalScreen {...props} />} />
      </Switch>

    </BrowserRouter>
    
  );
}

export default App;
