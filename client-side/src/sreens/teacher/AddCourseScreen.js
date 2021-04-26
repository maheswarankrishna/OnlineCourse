import { Formik } from "formik";
import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import * as Yup from "yup";
import FormInput from "../../components/form/FormInput";

import Screen from "../../components/Screen";

class AddCourseScreen extends Component {
  constructor(props) {
    super(props);
    this.requestChange = this.requestChange.bind(this);
    this.requestSubmit = this.requestSubmit.bind(this);

    this.state = {
      course: {
        title: "",
        description: "",
        category: 0,
      },

      categories: [],
    };
  }

  componentDidMount() {
    const catergories = [
      { id: 1, name: "Science" },
      { id: 2, name: "Maths" },
      { id: 3, name: "English" },
    ];
    this.setState({ ...this.state.categories, categories: catergories });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  requestSubmit = () => {
      console.log("Submitting values", this.state.course);
  };

  requestChange = (event) => {
    let { course } = this.state;
    
    if (event.target.name === 'category'){
        const array = this.state.categories;
        console.log(array);
    }

    this.setState({
      course: { ...course, [event.target.name]: event.target.value },
    });
  };

  render() {
    const validationSchema = Yup.object().shape({
      title: Yup.string().required().min(1).label("Title"),
      description: Yup.string().required().min(10).label("Description"),
        category: Yup.string().required().label('Category')
    });

    return <Screen title="Add Course">
        <Formik           initialValues={{ email: '', password: '' }}
          onSubmit={(values) => this.requestLogin(values)}
          onChange={(event) => this.requestChange(event)}
          validationSchema={validationSchema}>
              {({handleChange, handleSubmit, errors, setFieldTouched,touched})=>(
              <Form>
                  <FormInput id="title" name="title" type='text' label='Title' placeholder='Course title' onBlur={()=>setFieldTouched('title')} onChange={handleChange('title')} errors={errors.title} touched={touched.title}/>
                  <FormInput id="description" name="description" type='text' label='Description' placeholder='Course description' onBlur={()=>setFieldTouched('description')} onChange={handleChange('description')} errors={errors.description} touched={touched.description}/>
                  {this.state.categories && <FormInput id='category' name='category' type='' label='Category' onBlur={()=>setFieldTouched('category')} onChange={handleChange('category')} errors={errors.category} touched={touched.category} as='select' options={this.state.categories} />}
                  <Button variant='dark' onClick={handleSubmit}>Create</Button>
              </Form>
              )}
          </Formik>
    </Screen>;
  }
}
export default AddCourseScreen;
