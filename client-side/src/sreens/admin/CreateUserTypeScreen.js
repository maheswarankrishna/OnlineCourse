import { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from "../../components/Screen";
import FormInput from "../../components/form/FormInput";

import { CreateCourseCategoryType } from '../../api/courseType';

 class CreateUserTypeScreen extends Component{
    constructor(props) {
        super(props);    
        this.state={};
      }

      CourseCategory = (reqcourseType) => {
        var CourseCategoryTypes = {
          name: reqcourseType.name,
          subtitle: reqcourseType.subtitle,
          description: reqcourseType.description          
        };
        console.log(CourseCategoryTypes)
        const res = CreateCourseCategoryType(CourseCategoryTypes);
        res.then(result=> {result===res ? this.props.history.push('/') : this.setState({...this.state.error, error:true }) })
    
      };

      render() {
        //   Initializing formik variables
        const initalValues = { name: '', subtitle: '', description: '' }
    
        const validationSchema = Yup.object().shape({
           name: Yup.string().required().label("Name"),
           subtitle: Yup.string().required().label("Subtitle"),
           description: Yup.string().required().label("Description"),          
          });
    
          return (
            <Screen navbar={false}>
        <div>          
          <Formik initialValues={initalValues} onSubmit={(values) => this.CourseCategory(values)} validationSchema={validationSchema}>
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
              <Form >
                <h1>Create Course Category</h1>
                <hr style={{ marginBottom: 25 }} />

                <FormInput id="name" name='name' type='text' label='Name' placeholder='Course type name' onBlur={() => setFieldTouched('name')} onChange={handleChange('name')} errors={errors.name} touched={touched.name} />
                <FormInput id="subtitle" name='subtitle' type='text' label='Subtitle' placeholder='Subtitle' onBlur={() => setFieldTouched('subtitle')} onChange={handleChange('subtitle')} errors={errors.subtitle} touched={touched.subtitle} />
                <FormInput id="description" name='description' type='text' label='Description' placeholder='Description' onBlur={() => setFieldTouched('description')} onChange={handleChange('description')} errors={errors.description} touched={touched.description} />
                

                <div style={{ marginTop: 30, marginLeft: 0 }}>
                  <Button variant="dark" onClick={handleSubmit}>
                    Create
                  </Button>                  
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Screen>
      );

    }
}

export default withRouter(CreateUserTypeScreen);
