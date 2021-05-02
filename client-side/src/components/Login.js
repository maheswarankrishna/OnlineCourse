import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormInput from './form/FormInput';
import { LoginUser, LogoutUser } from '../api/users';



class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      status: {},
      error: false,
      errorMessage: '',
    };
  }
  componentDidMount() {
    LogoutUser();
  }

  handleLogin = (values) => {
    console.log(values);
    var user = { email: values.email, password: values.password };

    const res = LoginUser(user);
    res.then(result => { result === 200 ? this.props.history.push('/home') : this.setState({ ...this.state.error, error: true, errorMessage: 'Incorrect Email or Password.' }) })

  };

  render() {
    const validationSchema = Yup.object().shape({
      email: Yup.string().required().email().label('Email'),
      password: Yup.string().required().min(4).label('Password'),
    });

    return (
      <>
        {this.state.error && <Alert variant='danger'>{this.state.errorMessage}</Alert>}
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => this.handleLogin(values)}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <Form
              style={{
                width: 600,
                padding: 50,
                backgroundColor: 'inherit',
                margin: 'auto', alignItems: 'center'
              }}
            >
              <h1>Sign In</h1>
              <hr style={{ marginBottom: 25, backgroundColor: 'white' }} />

              <FormInput
                id="email"
                name="email"
                type="email"
                label="Email"
                placeholder="Enter email"
                onBlur={() => setFieldTouched('email')}
                onChange={handleChange('email')}
                errors={errors.email}
                touched={touched.email}
              />

              <FormInput
                id="password"
                name="password"
                type="password"
                label="Password"
                placeholder="Enter password"
                onBlur={() => setFieldTouched('password')}
                onChange={handleChange('password')}
                errors={errors.password}
                touched={touched.password}
              />

              <div style={{ marginLeft: 0 }}>

                <Button variant="dark" onClick={handleSubmit}>
                  Sign In
              </Button>
                <Button variant="link" onClick={() => this.props.history.push('/register')}>Create an Account</Button>
              </div>
            </Form>
          )}
        </Formik>


      </>
    );
  }
}

export default withRouter(Login);