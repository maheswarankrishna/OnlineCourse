import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from "../components/Screen";
import FormInput from "../components/form/FormInput";

// import { GetUserTypes } from '../api/users';
import { RegisterUser } from '../api/users';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userTypes: [],
      error: false,
    };
  }

  componentDidMount() {
    const userType = [{ id: 1, name: 'Admin' }, { id: 2, name: 'Teacher' }, { id: 3, name: 'Student' }];
    this.setState({ userTypes: userType });
    // const res = GetUserTypes();
    // res.then(result => this.setState({...this.state.userTypes, userTypes: result}))
  }

  RegisterUser = (reqUser) => {
    var user = {
      firstName: reqUser.firstName,
      lastName: reqUser.lastName,
      email: reqUser.email,
      password: reqUser.password,
      userType: reqUser.userType,
    };
    const res = RegisterUser(user);
    res.then(result=> {result===200 ? this.props.history.push('/') : this.setState({...this.state.error, error:true }) })

  };

  render() {
    //   Initializing formik variables
    const initalValues = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', userType: 'Admin' }

    const validationSchema = Yup.object().shape({
      firstName: Yup.string().required().label("First Name"),
      lastName: Yup.string().required().label("Last Name"),
      email: Yup.string().required().email().label("Email"),
      password: Yup.string().required().min(4).label("Password"),
      confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .label("Confirm Password"),
      userType: Yup.string().required().label('User Type')
    });

    // Render Register Screen
    return (

      <Screen navbar={false}>
        <div>
          {this.state.error && <Alert variant='danger'>Account Already Exists!</Alert>}
          <Formik initialValues={initalValues} onSubmit={(values) => this.RegisterUser(values)} validationSchema={validationSchema}>
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
              <Form >
                <h1>Register User</h1>
                <hr style={{ marginBottom: 25 }} />

                <FormInput id="firstName" name='firstName' type='text' label='First Name' placeholder='First name' onBlur={() => setFieldTouched('firstName')} onChange={handleChange('firstName')} errors={errors.firstName} touched={touched.firstName} />
                <FormInput id="lastName" name='lastName' type='text' label='Last Name' placeholder='Last name' onBlur={() => setFieldTouched('lastName')} onChange={handleChange('lastName')} errors={errors.lastName} touched={touched.lastName} />
                <FormInput id="email" name='email' type='text' label='Email' placeholder='Email' onBlur={() => setFieldTouched('email')} onChange={handleChange('email')} errors={errors.email} touched={touched.email} />
                <FormInput id="password" name='password' type='password' label='Password' placeholder='Password' onBlur={() => setFieldTouched('password')} onChange={handleChange('password')} errors={errors.password} touched={touched.password} />
                <FormInput id="confirmPassword" name='confirmPassword' type='password' label='Confirm Password' placeholder='Confirm password' onBlur={() => setFieldTouched('confirmPassword')} onChange={handleChange('confirmPassword')} errors={errors.confirmPassword} touched={touched.confirmPassword} />
                <FormInput as='select' options={this.state.userTypes} id="userType" name='userType' type='text' label='User Type' placeholder='User Type' onBlur={() => setFieldTouched('userType')} onChange={handleChange('userType')} errors={errors.userType} touched={touched.userType} />

                <div style={{ marginTop: 30, marginLeft: 0 }}>
                  <Button variant="dark" onClick={handleSubmit}>
                    Register
                  </Button>
                  <Button variant="link" onClick={() => this.props.history.push('/')}>Already a member</Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Screen>

    );
  }
}

export default withRouter(RegisterScreen);
