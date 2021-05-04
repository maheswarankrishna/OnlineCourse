import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import { Alert, Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../../components/Screen";
import FormInput from "../../components/form/FormInput";

import { GetAllCourseTypes } from "../../api/courseType";
import { CreateCourse } from "../../api/courses";
import { getUserId } from "../../api/users";

function AddCourseScreen(props) {
  const [categories, setCategories] = useState();
  const [error, setError] = useState(false);
  // let history = useHistory();

  // getting the categories from the API 
  useEffect(() => {
    let mounted = true;
    const res = GetAllCourseTypes();
    if (mounted) { res.then(result => setCategories(result)) }

    return () => mounted = false;

  }, [])

  const handleOnSubmit = (course) => {
    const category = categories.find(type => type.name === course.courseType);
    const user = getUserId();
    console.log(user);
    var courseObj = { courseName: course.title, description: course.description, courseType: category.id, teacherId:user.userId }
    
    const res = CreateCourse(courseObj);
    res.then(result => { result === 200 ? console.log(result) : setError(true) });
    // history.push('/teacher/courses')
  };
  
  const initial = Array.isArray(categories) && categories[0].name;
  const initalValues = { title: '', description: '', courseType: initial };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required().label("Course Title"),
    description: Yup.string().required().label("Course Description"),
    courseType: Yup.string().required("Course Type"),
  });

  return (
    <Screen title="Add Course">
      <div>
        {error && <Alert variant='danger'>Failed to Create Course!</Alert>}
        <Formik initialValues={initalValues} onSubmit={(values) => handleOnSubmit(values)} validationSchema={validationSchema} >
          {({ handleSubmit, handleChange, setFieldTouched, touched, errors }) => (
            <Form>
              <FormInput id="title" name="title" type="text" label="Course title" onBlur={() => setFieldTouched('title')} onChange={handleChange("title")} placeholder={"Course title"} errors={errors.title} touched={touched.title} />
              <FormInput id="description" name="description" type="text" label="Course description" onBlur={() => setFieldTouched("description")} onChange={handleChange("description")} placeholder={"Course description"} errors={errors.description} touched={touched.description} />
              {Array.isArray(categories) && <FormInput as='select' options={categories} id="courseType" name='courseType' type='text' label='Course Type' placeholder='Course Type' onBlur={() => setFieldTouched('courseType')} onChange={handleChange('courseType')} errors={errors.courseType} touched={touched.courseType} />}

              <Button variant='dark' onClick={handleSubmit}>Submit</Button>
            </Form>
          )}
        </Formik>
      </div>
    </Screen>
  );
}

export default AddCourseScreen;
