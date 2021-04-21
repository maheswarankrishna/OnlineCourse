import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function Navigationbar(props) {
  // const [userType, setUserType] = useState();
  
  // Navigation options
  // const Admin = [{title: 'Home', link:'/admin/home'}, {title:'Request Approval', link:'/admin/requests'}];
  // const Teacher = [{title: 'Home', link:'/teach/home'}, {title: 'Courses', link:'/teach/courses'}, {title: 'Quizes', link:'/teach/quizes'}];
  // const Student = [{title: 'Home', link:'/student/home'}, {title: 'Courses', link:'/student/courses'}, {title: 'Results', link:'/student/results'}];

  

  return (
    <>
      <Navbar bg="white" expand="lg" sticky="top">
        <Navbar.Brand href="/home">Online Certificate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/mybookings">My Quizes</Nav.Link>
            <Nav.Link href="/shipments">My Results</Nav.Link>

            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}