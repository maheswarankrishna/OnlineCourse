import React, { useEffect, useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { getUserId } from "../api/users";

export default function Navigationbar(props) {
  const [userType, setUserType] = useState();

  useEffect(() => {
    let mounted = true;
    const { userType } = getUserId();

    if (mounted) { setUserType(userType) }
    return () => mounted = false;
  }, [])



  // Navigation options
  const Admin = [{ title: 'Home', link: '/admin/home' }, { title: 'Request Approval', link: '/admin/requests' }];
  const Teacher = [{ title: 'Home', link: '/teacher/home' }, { title: 'Courses', link: '/teacher/courses' }, { title: 'Add Course', link: '/teacher/addCourse' }];
  const Student = [{ title: 'Home', link: '/student/home' }, { title: 'Courses', link: '/student/courses' }, { title: 'Results', link: '/student/results' }];



  return (
    <>
      <Navbar bg="white" expand="lg" sticky="top">
        <Navbar.Brand href="/home">Online Certificate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            {userType && userType==='Admin' && Admin.map(({link, title}, index) => <Nav.Link key={index}href={link}>{title}</Nav.Link>)}
            {userType && userType==='Teacher' && Teacher.map(({link, title}, index) => <Nav.Link key={index}href={link}>{title}</Nav.Link>)}
            {userType && userType==='Student' && Student.map(({link, title}, index) => <Nav.Link key={index}href={link}>{title}</Nav.Link>)}
            
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