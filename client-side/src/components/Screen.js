import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Navigationbar from './Navbar';
// import { getUserId } from '../actions/authAction';

export default function Screen({ children, title, subtitle, navbar=true }) {
  // const history = useHistory();
  // useEffect(() => {
  //   const user = getUserId();
  //   if (user === null) history.push('/');
  // });

  return (
    <div>
      {navbar && <Navigationbar />}
      <Container
        style={{ backgroundColor: 'white', padding: 15, marginTop: 15 }}
      >
        <div style={{ sticky: 'top' , display:'inline-block'}}>
          {title && <><h1>{title}</h1></>}
          {subtitle && <><h3 className='text-muted'>{subtitle}</h3></>}
        </div>
        <div>{children}</div>
      </Container>
    </div>
  );
}