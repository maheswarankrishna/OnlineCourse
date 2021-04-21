import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from "../components/Screen";
import FormInput from "../components/form/FormInput";

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.requestChange = this.requestChange.bind(this);
    this.requestRegister = this.requestRegister.bind(this);

    this.state = {
      user:{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        userType: "",
      }
    };
  }

  requestRegister = () => {};

  requestChange = (event) => {
    let { user } = this.state;
    this.setState({
      user: { ...user, [event.target.name]: event.target.value },
    });
  };

  // componentDidMount() {}

  // componentDidUpdate() {}

  render() {
    //   Initializing formik variables
    const initalValues = {firstName:'', lastName:'', email:'', password:'', confirmPassword:'', userType:''}

    const validationSchema = Yup.object().shape({
      firstName: Yup.string().required().label("First Name"),
      lastName: Yup.string().required().label("Last Name"),
      email: Yup.string().required().email().label("Email"),
      password: Yup.string().required().min(4).label("Password"),
      confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .label("Confirm Password"),
      userType: Yup.string().min(1).required().label('User Type')
    });

    // Render Register Screen
    return (
     
      <Screen navbar={false}>
        <div>
          <Formik initialValues={initalValues} onSubmit={(values)=>this.requestRegister(values)} validationSchema={validationSchema} onChange={(event)=>this.requestChange(event)}>
            {({handleChange, handleSubmit, errors, setFieldTouched, touched})=>(
              <Form >
                <h1>Register User</h1>
                <hr style={{ marginBottom: 25 }} />

                <FormInput id="firstName" name='firstName' type='text' label='First Name' placeholder='First name' onBlur={()=>setFieldTouched('firstName')} onChange={handleChange('firstName')} errors={errors.firstName} touched={touched.firstName}/>
                <FormInput id="lastName" name='lastName' type='text' label='Last Name' placeholder='Last name' onBlur={()=>setFieldTouched('lastName')} onChange={handleChange('lastName')} errors={errors.lastName} touched={touched.lastName}/>
                <FormInput id="email" name='email' type='text' label='Email' placeholder='Email' onBlur={()=>setFieldTouched('email')} onChange={handleChange('email')} errors={errors.email} touched={touched.email}/>
                <FormInput id="password" name='password' type='password' label='Password' placeholder='Password' onBlur={()=>setFieldTouched('password')} onChange={handleChange('password')} errors={errors.password} touched={touched.password}/>
                <FormInput id="confirmPassword" name='confirmPassword' type='password' label='Confirm Password' placeholder='Confirm password' onBlur={()=>setFieldTouched('confirmPassword')} onChange={handleChange('confirmPassword')} errors={errors.confirmPassword} touched={touched.confirmPassword}/>
                <FormInput id="userType" name='userType' type='text' label='User Type' placeholder='User Type' onBlur={()=>setFieldTouched('userType')} onChange={handleChange('userType')} errors={errors.userType} touched={touched.userType}/>
                
                <div style={{marginTop:30, marginLeft:0}}>
                  <Button variant="dark" onClick={handleSubmit}>
                    Register
                  </Button>
                  <Button variant="link" onClick={()=>this.props.history.push('/login')}>Already a member</Button>
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
