// import logo from './logo.svg';
// import './App.css';

import { Route, BrowserRouter, Switch } from "react-router-dom";

// Common Screens
import Home from "./sreens/Home";
import LoginScreen from "./sreens/LoginScreen";
import RegisterScreen from "./sreens/RegisterScreen";

// Agent Screens
import ApprovalScreen from "./sreens/admin/ApprovalScreen";

// Student Screens
import Course from "./sreens/student/CourseScreen";
import Courses from "./sreens/student/CoursesScreen";

// Teacher Screens
import MyCoursesScreen from "./sreens/teacher/MyCoursesScreen";
import MyCourseScreen from "./sreens/teacher/MyCourseScreen";
import AddCourseScreen from "./sreens/teacher/AddCourseScreen";
import CreateUserTypeScreen from "./sreens/admin/CreateUserTypeScreen";

function App() {
  return (
    <BrowserRouter>
  
      <Route exact path="/" component={LoginScreen} />
      
      <Switch>
        {/* Common Paths */}
        <Route
          exact
          path="/register"
          render={(props) => <RegisterScreen {...props} />}
        />
        <Route exact path="/home"   render={(props) => <Home {...props} />} />
        
        
        {/* Student Paths */}
        <Route exact path="/student/courses" component={Courses} />
        <Route exact path="/student/courses/:id" render={(props) => <Course {...props} />} />
        {/* <Route exact path="/quizes"   render={(props) => <Home {...props} />} /> */}
        {/* <Route exact path="/results"   render={(props) => <Home {...props} />} /> */}
        {/* <Route exact path="/mycourses" component={Courses} /> */}
        
        {/* Teacher Paths */}
        <Route exact path="/teacher/courses" render={(props) => <MyCoursesScreen {...props} />} />
        <Route exact path="/teacher/courses/:id" render={(props) => <MyCourseScreen {...props} />} />
        <Route exact path="/teacher/addcourse" render={(props) => <AddCourseScreen {...props} />} />

        {/* Admin Paths */}
        <Route exact path="/admin/approval" render={(props) => <ApprovalScreen {...props} />} />
        <Route exact path="/admin/createusertype" render={(props) => <CreateUserTypeScreen {...props} />} />
      </Switch>

    </BrowserRouter>
    
  );
}

export default App;
